function unnest_span(span) {
  span.normalize()
  const result = []
  for (let i = 0; i < span.childNodes.length; i++) {
    const node = span.childNodes[i]
    if (node.nodeName === 'SPAN') {
      if (node.childNodes.length === 1) {
        result.push(node)
      } else if (node.childNodes.length > 1) {
        result.push.apply(result, unnest_span(node))
      }
    } else {
      const new_span = span.cloneNode(false)
      new_span.innerHTML = ''
      new_span.appendChild(node.cloneNode(true))
      result.push(new_span)
    }
  }
  return result
}

function selectAllFieldNodes(field, sel) {
  setFormat('inserthtml', '')
  const newRange = new Range()
  sel.removeAllRanges()
  newRange.selectNodeContents(field)
  sel.addRange(newRange)
}

function selectText(node, sel) {
  sel.selectAllChildren(node.parentNode)
}

function clean_field(field) {
  const new_field = document.createDocumentFragment()
  for (let i = 0; i < field.childNodes.length; i++) {
    const node = field.childNodes[i]
    if (node.nodeName === 'SPAN') {
      const new_nodes = unnest_span(node)
      for (let j = 0; j < new_nodes.length; j++) {
        new_field.appendChild(new_nodes[j])
      }
    } else {
      new_field.appendChild(node.cloneNode(true))
    }
  }
  field.innerHTML = ''
  field.appendChild(new_field)
}

function is_field(node) {
  return node.nodeName === 'DIV' && node.classList.contains('field')
}

function get_field(sel, text_only = false) {
  if (!text_only) {
    return sel.baseNode
  }

  let text = sel.baseNode.textContent
  let sibling = sel.baseNode.nextSibling
  while (sibling) {
    if (sibling.outerHTML === '<br>' || sibling.outerHTML === '<br/>') {
      text += sibling.outerHTML
    } else {
      text += sibling.textContent
    }
    sibling = sibling.nextSibling
  }
  return text
}
