function insertHTMLToField(newHTML, ordinal) {
  const sel = getCurrentField().shadowRoot.getSelection()
  const field = get_field(sel)
  selectAllFieldNodes(field, sel)
  selectText(field, sel)
  setFormat('inserthtml', newHTML.trim())
}

try {
  insertHTMLToField('%s', '%s')
} catch (e) {
  alert(e)
}
