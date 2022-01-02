function fetchText() {
  const sel = getCurrentField().shadowRoot.getSelection()
  const field = get_field(sel, true)
  pycmd('textToJReading:||:||:' + field + ':||:||:' + getCurrentField().ord + ':||:||:' + getNoteId())
}

try {
  fetchText()
} catch (e) {
  alert(e)
}
