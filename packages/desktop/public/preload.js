const { ipcRenderer } = require('electron')

function getXPathForElement(element) {
  const idx = (sib, name) =>
    sib
      ? idx(sib.previousElementSibling, name || sib.localName) +
        (sib.localName == name)
      : 1

  const segs = (element) =>
    !element || element.nodeType !== 1
      ? ['']
      : element.id && document.getElementById(element.id) === element
      ? [`id("${element.id}")`]
      : [
          ...segs(element.parentNode),
          `${element.localName.toLowerCase()}[${idx(element)}]`
        ]

  return segs(element).join('/')
}

function getElementByXPath(path) {
  return document.evaluate(
    path,
    document,
    null,
    XPathResult.ANY_UNORDERED_NODE_TYPE,
    null
  ).singleNodeValue
}

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

let responder
let isViewing = false

const clickListener = (event) => {
  if (!isViewing) {
    return
  }

  document.removeEventListener('click', clickListener)

  ipcRenderer.send('whenClicked', getCssPath(event.target))

  if (typeof responder !== 'undefind') clearTimeout(responder)

  responder = setTimeout(
    () => document.addEventListener('click', clickListener),
    0
  )
}

document.addEventListener('click', clickListener)

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('mouseout', () => (isViewing = false))
  document.addEventListener('mouseover', ({ clientX, clientY }) => {
    isViewing = true

    ipcRenderer.sendToHost('coordinates', { x: clientX, y: clientY })
  })

  const getData = () => {
    const { documentElement } = document
    const { scrollHeight, scrollTop, clientHeight } = documentElement

    return Math.round((scrollTop / (scrollHeight - clientHeight)) * 100)
  }

  document.addEventListener('scroll', () => {
    isViewing && ipcRenderer.send('whenScrolled', getData())
  })

  ipcRenderer.on('toScroll', (_, data) => {
    const { documentElement } = document
    const { scrollHeight, clientHeight } = documentElement

    !isViewing &&
      window.scrollTo(0, (data / 100) * (scrollHeight - clientHeight))
  })

  ipcRenderer.on('toClick', (_, data) => {
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
