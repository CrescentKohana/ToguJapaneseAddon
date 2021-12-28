function fetchText() {
  const sel = getCurrentField().shadowRoot.getSelection()
  const field = get_field(sel)
  pycmd('textToJReading:||:||:' + field.textContent + ':||:||:' + getCurrentField().ord + ':||:||:' + getNoteId())
}

try {
  fetchText()
} catch (e) {
  alert(e)
}
