function KeyPress(e) {
  const evtobj = window.event ? event : e
  if (evtobj.keyCode === 90 && evtobj.ctrlKey) {
    pycmd('attemptUndo')
  }
}

document.onkeydown = KeyPress
