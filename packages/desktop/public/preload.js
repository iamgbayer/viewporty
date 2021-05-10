const { ipcRenderer, remote } = require('electron')
const DomInspector = require('./lib/dom-inspector')

const getCssPath = (element) => {
  if (!(element instanceof Element)) return
  var path = []

  while (element.nodeType === Node.ELEMENT_NODE) {
    var selector = element.nodeName.toLowerCase()
    var sib = element,
      nth = 1
    while (
      sib.nodeType === Node.ELEMENT_NODE &&
      (sib = sib.previousElementSibling) &&
      nth++
    );
    selector += ':nth-child(' + nth + ')'
    path.unshift(selector)
    element = element.parentNode
  }

  return path.join(' > ')
}

const getStyles = (a) => {
  let sheets = document.styleSheets,
    o = []

  a.matches =
    a.matches ||
    a.webkitMatchesSelector ||
    a.mozMatchesSelector ||
    a.msMatchesSelector ||
    a.oMatchesSelector

  for (var i in sheets) {
    var rules = sheets[i].rules || sheets[i].cssRules
    for (var r in rules) {
      if (a.matches(rules[r].selectorText)) {
        o.push(rules[r].cssText)
      }
    }
  }

  return o
}

const getCssPathCleaned = (element) => {
  const stack = []

  while (element.parentNode != null) {
    let sibCount = 0

    for (
      let iterator = 0;
      iterator < element.parentNode.childNodes.length;
      iterator++
    ) {
      let sib = element.parentNode.childNodes[iterator]

      if (sib.nodeName == element.nodeName) {
        if (sib === element) {
          sibIndex = sibCount
        }

        sibCount++
      }
    }

    element.hasAttribute('id') && element.id !== ''
      ? stack.unshift(element.nodeName.toLowerCase() + '#' + element.id)
      : stack.unshift(element.nodeName.toLowerCase())

    element = element.parentNode
  }

  return stack.join(' > ')
}

let responder
let isViewing = false
let canInspect = false

const clickEventListener = (event) => {
  if (canInspect && isViewing) {
    canInspect = false

    const { target } = event
    const { textContent } = target
    const { cssText } = window.getComputedStyle(target)

    const makeData = () => ({
      textContent,
      computedStyles: cssText,
      styles: getStyles(target),
      path: getCssPathCleaned(target)
    })

    const allWebContents = remote.webContents.getAllWebContents()

    allWebContents.forEach((webContent) => {
      webContent.send('toInspect', false)
      webContent.send('whenInspected', makeData())
    })

    event.preventDefault()

    return
  }

  if (!isViewing) {
    return
  }

  document.removeEventListener('click', clickEventListener)

  ipcRenderer.send('syncWhenClicked', getCssPath(event.target))

  if (typeof responder !== 'undefined') clearTimeout(responder)

  responder = setTimeout(
    () => document.addEventListener('click', clickEventListener),
    0
  )
}

const inputEventListener = (event) => {}

document.addEventListener('DOMContentLoaded', () => {
  const inspector = new DomInspector()

  document.addEventListener('click', clickEventListener)
  document.addEventListener('input', inputEventListener)

  document.addEventListener('mouseout', () => {
    isViewing = false

    inspector.disable()
  })

  document.addEventListener('mouseover', () => {
    isViewing = true

    canInspect && inspector.enable()
  })

  const getScrollData = () => {
    const { documentElement } = document
    const { scrollHeight, scrollTop, clientHeight } = documentElement

    return Math.round((scrollTop / (scrollHeight - clientHeight)) * 100)
  }

  document.addEventListener('scroll', () => {
    isViewing && ipcRenderer.send('whenScrolled', getScrollData())
  })

  ipcRenderer.on('toInspect', (_, data) => (canInspect = data))

  ipcRenderer.on('whenStyleModified', (_, data) => {
    const { property, selector, value } = data
    const element = document.querySelector(selector)

    element.style[property] = value
  })

  ipcRenderer.on('toScroll', (_, data) => {
    const { documentElement } = document
    const { scrollHeight, clientHeight } = documentElement

    !isViewing &&
      window.scrollTo(0, (data / 100) * (scrollHeight - clientHeight))
  })

  ipcRenderer.on('syncWhenClick', (_, data) => {
    const target = document.querySelector(data)

    if (isViewing) {
      return
    }

    if (target.click) {
      return target.click()
    }

    if (target.fireEvent) {
      return target.fireEvent('onclick')
    }

    const event = document.createEvent('Events')
    event.initEvent('click', true, false)

    target.dispatchEvent(event)
  })
})
