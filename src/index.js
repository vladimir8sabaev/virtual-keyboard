import './index.html';
import './style.scss';
import {
  keyMapEn, keyMapRu, keyMapEnShift, keyMapRuShift, specialArr,
} from './modules/alphabet.js';
import makeRow from './modules/createRow.js';

document.querySelector('body').innerHTML = `
                  <textarea class="textarea" name="textarea" id="textarea" cols="100" rows="20"></textarea>
                  <div id="keyboard"></div>
                  <h2 class="descr">Keyboard was made on Windows</h2>
                  <h2 class="descr">Click left Ctrl + left Alt to change language</h2>
                  `;

let cursorPosition = 0;
let language = 'en';

function init(obj) {
  document.querySelector('#keyboard').innerHTML = '';
  makeRow(0, 13, obj);
  makeRow(14, 28, obj);
  makeRow(29, 41, obj);
  makeRow(42, 54, obj);
  makeRow(55, 63, obj);
  language = obj.Language;
}
init(JSON.parse(localStorage.getItem('object')) || keyMapEn);

const textArea = document.querySelector('.textarea');
const keys = document.querySelectorAll('.key');
const leftShift = document.querySelector('[data-code="ShiftLeft"]');
const rightShift = document.querySelector('[data-code="ShiftRight"]');
const caps = document.querySelector('[data-code="CapsLock"]');

function setCaretPosition(ctrl, start, end) {
  if (ctrl.setSelectionRange) {
    ctrl.focus();
    ctrl.setSelectionRange(start, end);
  }
}
function changeKeys(obj) {
  for (let i = 0; i < keys.length; i += 1) {
    keys[i].innerText = obj[keys[i].dataset.code];
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
    if (language === 'ru') {
      changeKeys(keyMapRu);
    } else {
      changeKeys(keyMapEn);
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
    if (language === 'ru') {
      changeKeys(keyMapRuShift);
    } else {
      changeKeys(keyMapEnShift);
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
    if (language === 'ru') {
      changeKeys(keyMapRu);
    } else {
      changeKeys(keyMapEn);
    }
    if (caps.classList.contains('active') || event.getModifierState('CapsLock')) {
      for (let i = 0; i < keys.length; i += 1) {
        if (keys[i].innerText.length === 1) {
          keys[i].innerText = keys[i].innerText.toUpperCase();
        }
      }
    }
  } else {
    if (language === 'ru') {
      changeKeys(keyMapRuShift);
    } if (language === 'en') {
      changeKeys(keyMapEnShift);
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
    if (language === 'ru') {
      changeKeys(keyMapEn);
      language = 'en';
      const currentLang = JSON.stringify(keyMapEn);
      localStorage.setItem('object', currentLang);
    } else {
      changeKeys(keyMapRu);
      language = 'ru';
      const currentLang = JSON.stringify(keyMapRu);
      localStorage.setItem('object', currentLang);
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
