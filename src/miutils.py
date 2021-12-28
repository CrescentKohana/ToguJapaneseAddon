# -*- coding: utf-8 -*-
# 

import aqt
from aqt.qt import *
from os.path import dirname, join

addon_path = dirname(__file__)

def miInfo(text, parent=False, level = 'msg'):
    if level == 'wrn':
        title = "Togu Japanese - Warning"
    elif level == 'not':
        title = "Togu Japanese - Notice"
    elif level == 'err':
        title = "Togu Japanese - Error"
    else:
        title = "Togu Japanese"
    if parent is False:
        parent = aqt.mw.app.activeWindow() or aqt.mw
    # icon = QIcon(join(addon_path, 'icons', '.png'))
    mb = QMessageBox(parent)
    mb.setText(text)
    # mb.setWindowIcon(icon)
    mb.setWindowTitle(title)
    b = mb.addButton(QMessageBox.Ok)
    b.setDefault(True)

    return mb.exec_()

def miAsk(text, parent=None, day=True):
    msg = QMessageBox(parent)
    msg.setWindowTitle("Togu Japanese")
    msg.setText(text)
    # icon = QIcon(join(addon_path, 'icons', '.png'))
    b = msg.addButton(QMessageBox.Yes)
    b.setFixedSize(100, 30)
    b.setDefault(True)
    c = msg.addButton(QMessageBox.No)
    c.setFixedSize(100, 30)
    if not day:
        msg.setStyleSheet(" QMessageBox {background-color: #272828;}")
    # msg.setWindowIcon(icon)
    msg.exec_()
    if msg.clickedButton() == b:
        return True
    else:
        return False