import './index.html';
import './style.scss';
import { makeRow, alphabet } from './modules/renderKeyboard.js';

document.querySelector('body').innerHTML = `
                  <textarea class="textarea" name="textarea" id="textarea" cols="100" rows="20"></textarea>
                  <div id="keyboard"></div>
                  <h2 class="descr">Keyboard was made on Windows</h2>
                  <h2 class="descr">Click left Ctrl + left Alt to change language</h2>
                  `;

let cursorPosition = 0;
const specialArr = ['Backspace', 'Tab', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight', 'ControlRight', 'Delete'];

function init() {
  document.querySelector('#keyboard').innerHTML = '';
  makeRow(0, 13);
  makeRow(14, 28);
  makeRow(29, 41);
  makeRow(42, 54);
  makeRow(55, 63);
}
init();

const textArea = document.querySelector('.textarea');
const keys = document.querySelectorAll('.key');
const leftShift = document.querySelector('[data-code="ShiftLeft"]');
const rightShift = document.querySelector('[data-code="ShiftRight"]');
const caps = document.querySelector('[data-code="CapsLock"]');

function changeKeys(lang) {
  for (let i = 0; i < keys.length; i += 1) {
    keys[i].innerText = alphabet[i][lang];
  }
  localStorage.setItem('language', lang);
}

changeKeys(localStorage.getItem('language') || 'keyEn');

function setCaretPosition(ctrl, start, end) {
  if (ctrl.setSelectionRange) {
    ctrl.focus();
    ctrl.setSelectionRange(start, end);
  }
}

function keyUpHandler(event) {
  event.preventDefault();
  const activeKey = document.querySelector(`[data-code="${event.code}"]`);
  if (activeKey && event.code !== 'CapsLock') {
    activeKey.classList.remove('active');
  }
  if (event.key === 'Shift') {
    leftShift.classList.remove('active');
    rightShift.classList.remove('active');
    if (localStorage.getItem('language') === 'keyRu') {
      changeKeys('keyRn');
    } else {
      changeKeys('keyEn');
    }
    if (caps.classList.contains('active') || event.getModifierState('CapsLock')) {
      for (let i = 0; i < keys.length; i += 1) {
        if (keys[i].innerText.length === 1) {
          keys[i].innerText = keys[i].innerText.toUpperCase();
        }
      }
    }
  }
}

function keyDownHandler(event) {
  cursorPosition = textArea.selectionStart;
  event.preventDefault();
  if (event.key === 'Shift') {
    if (localStorage.getItem('language') === 'keyRu') {
      changeKeys('keyRuShift');
    } else {
      changeKeys('keyEnShift');
    }
    if (caps.classList.contains('active') || event.getModifierState('CapsLock')) {
      for (let i = 0; i < keys.length; i += 1) {
        if (keys[i].innerText.length === 1) {
          keys[i].innerText = keys[i].innerText.toLowerCase();
        }
      }
    }
  }
  if (event.code === 'Backspace') {
    if (cursorPosition > 0) {
      textArea.value = textArea.value.slice(0, cursorPosition - 1)
    + textArea.value.slice(cursorPosition);
      setCaretPosition(textArea, cursorPosition - 1, cursorPosition - 1);
      cursorPosition -= 1;
    }
  }
  if (event.code === 'Enter') {
    textArea.value = `${textArea.value.slice(0, cursorPosition)}\n${
      textArea.value.slice(cursorPosition)}`;
    cursorPosition += 1;
    setCaretPosition(textArea, cursorPosition, cursorPosition);
  }
  if (event.code === 'Tab') {
    textArea.value = `${textArea.value.slice(0, cursorPosition)}\t${
      textArea.value.slice(cursorPosition)}`;
    cursorPosition += 1;
    setCaretPosition(textArea, cursorPosition, cursorPosition);
  }
  if (event.code === 'CapsLock') {
    caps.classList.toggle('active');
    for (let i = 0; i < keys.length; i += 1) {
      if (keys[i].innerText.length === 1) {
        if (!event.getModifierState('CapsLock')) {
          keys[i].innerText = keys[i].innerText.toLowerCase();
        } else {
          keys[i].innerText = keys[i].innerText.toUpperCase();
        }
      }
    }
  }
  if (event.code === 'Delete') {
    if (cursorPosition > 0) {
      textArea.value = textArea.value.slice(0, cursorPosition)
    + textArea.value.slice(cursorPosition + 1);
      setCaretPosition(textArea, cursorPosition, cursorPosition);
    }
  }
  const activeKey = document.querySelector(`[data-code="${event.code}"]`);
  if (activeKey && event.code !== 'CapsLock') {
    activeKey.classList.add('active');
    if (specialArr.indexOf(event.code) === -1) {
      if (event.getModifierState('CapsLock')) {
        textArea.value = `${textArea.value.slice(0, cursorPosition)}${activeKey.textContent.toUpperCase()}${
          textArea.value.slice(cursorPosition)}`;
      } else {
        textArea.value = `${textArea.value.slice(0, cursorPosition)}${activeKey.textContent}${
          textArea.value.slice(cursorPosition)}`;
      }
      cursorPosition += 1;
      setCaretPosition(textArea, cursorPosition, cursorPosition);
    }
  }
}

function changeShift(event) {
  if (event.type === 'mouseup') {
    if (localStorage.getItem('language') === 'keyRu') {
      changeKeys('keyRu');
    } else {
      changeKeys('keyEn');
    }
    if (caps.classList.contains('active') || event.getModifierState('CapsLock')) {
      for (let i = 0; i < keys.length; i += 1) {
        if (keys[i].innerText.length === 1) {
          keys[i].innerText = keys[i].innerText.toUpperCase();
        }
      }
    }
  } else {
    if (localStorage.getItem('language') === 'keyRu') {
      changeKeys('keyRuShift');
    } if (localStorage.getItem('language') === 'keyEn') {
      changeKeys('keyEnShift');
    }
    if (caps.classList.contains('active') || event.getModifierState('CapsLock')) {
      for (let i = 0; i < keys.length; i += 1) {
        if (keys[i].innerText.length === 1) {
          keys[i].innerText = keys[i].innerText.toLowerCase();
        }
      }
    }
  }
}

function virtualKeysHandler() {
  keys.forEach((key) => {
    key.addEventListener('click', (event) => {
      cursorPosition = textArea.selectionStart;
      textArea.focus();
      keys.forEach((item) => {
        if (item.dataset.code !== 'CapsLock') {
          item.classList.remove('active');
        }
      });
      if (specialArr.indexOf(event.target.dataset.code) === -1) {
        textArea.value = `${textArea.value.slice(0, cursorPosition)}${event.target.textContent}${
          textArea.value.slice(cursorPosition)}`;
      } else {
        if (event.target.dataset.code === 'Tab') {
          textArea.value = `${textArea.value.slice(0, cursorPosition)}\t${
            textArea.value.slice(cursorPosition)}`;
          cursorPosition += 1;
          setCaretPosition(textArea, cursorPosition, cursorPosition);
        }
        if (event.target.dataset.code === 'Enter') {
          textArea.value = `${textArea.value.slice(0, cursorPosition)}\n${
            textArea.value.slice(cursorPosition)}`;
          cursorPosition += 1;
          setCaretPosition(textArea, cursorPosition, cursorPosition);
        }
        if (event.target.dataset.code === 'Backspace') {
          if (cursorPosition > 0) {
            textArea.value = textArea.value.slice(0, cursorPosition - 1)
          + textArea.value.slice(cursorPosition);
            cursorPosition -= 1;
            setCaretPosition(textArea, cursorPosition, cursorPosition);
          }
        }
        if (event.target.dataset.code === 'Delete') {
          if (cursorPosition > 0) {
            textArea.value = textArea.value.slice(0, cursorPosition)
          + textArea.value.slice(cursorPosition + 1);
            setCaretPosition(textArea, cursorPosition, cursorPosition);
          }
        }
        if (event.target.dataset.code === 'CapsLock') {
          event.target.classList.toggle('active');
          for (let i = 0; i < keys.length; i += 1) {
            if (keys[i].innerText.length === 1) {
              if (event.target.classList.contains('active')) {
                keys[i].innerText = keys[i].innerText.toUpperCase();
              } else {
                keys[i].innerText = keys[i].innerText.toLowerCase();
              }
            }
          }
        }
      }
    });
  });
  leftShift.addEventListener('mousedown', changeShift);
  rightShift.addEventListener('mousedown', changeShift);
  leftShift.addEventListener('mouseup', changeShift);
  rightShift.addEventListener('mouseup', changeShift);
}

function changeLanguage(event) {
  if (event.ctrlKey && event.altKey) {
    if (localStorage.getItem('language') === 'keyRu') {
      changeKeys('keyEn');
      localStorage.setItem('language', 'keyEn');
    } else {
      changeKeys('keyRu');
      localStorage.setItem('language', 'keyRu');
    }
    if (caps.classList.contains('active')) {
      for (let i = 0; i < keys.length; i += 1) {
        if (keys[i].innerText.length === 1) {
          keys[i].innerText = keys[i].innerText.toUpperCase();
        }
      }
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('keydown', keyDownHandler);
  document.addEventListener('keyup', keyUpHandler);
  virtualKeysHandler();
  document.addEventListener('keydown', changeLanguage);
});
