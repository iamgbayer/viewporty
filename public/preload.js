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
  return new XPathEvaluator().evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue
}

let responder
let isViewing = false

const clickListener = (event) => {
  if (!isViewing) {
    return
  }

  document.removeEventListener('click', clickListener)

  ipcRenderer.send('whenClicked', getXPathForElement(event.target))

  if (typeof responder !== 'undefind') clearTimeout(responder)

  responder = setTimeout(
    () => document.addEventListener('click', clickListener),
    0
  )
}

document.addEventListener('click', clickListener)

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('mouseout', () => (isViewing = false))
  document.addEventListener('mouseover', () => (isViewing = true))

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
    const target = getElementByXPath(data)

    // console.log(data, target)

    if (isViewing) {
      return
    }

    // !isViewing &&
    window.setTimeout(() => {
      // const event = document.createEvent('MouseEvents')
      // event.initEvent('click', true, true)

      // target && target.dispatchEvent(event)

      target && target.click()
    }, 0)
  })
})
