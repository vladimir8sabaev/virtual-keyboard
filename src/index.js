import './index.html';
import './style.scss';

const body = document.querySelector('body');
let language = 'en';
body.innerHTML = `
                  <textarea class="textarea" name="textarea" id="textarea" cols="100" rows="20"></textarea>
                  <div id="keyboard"></div>
                  <h2 class="descr">Keyboard was made on Windows</h2>
                  <h2 class="descr">Click left Ctrl + left Alt to change language</h2>
                  `;
const keyCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

const keyMapEn = {
  Backquote: '`',
  Digit1: '1',
  Digit2: '2',
  Digit3: '3',
  Digit4: '4',
  Digit5: '5',
  Digit6: '6',
  Digit7: '7',
  Digit8: '8',
  Digit9: '9',
  Digit0: '0',
  Minus: '-',
  Equal: '=',
  Backspace: 'Backspace',
  Tab: 'Tab',
  KeyQ: 'q',
  KeyW: 'w',
  KeyE: 'e',
  KeyR: 'r',
  KeyT: 't',
  KeyY: 'y',
  KeyU: 'u',
  KeyI: 'i',
  KeyO: 'o',
  KeyP: 'p',
  BracketLeft: '[',
  BracketRight: ']',
  Backslash: '\\',
  CapsLock: 'CapsLock',
  KeyA: 'a',
  KeyS: 's',
  KeyD: 'd',
  KeyF: 'f',
  KeyG: 'g',
  KeyH: 'h',
  KeyJ: 'j',
  KeyK: 'k',
  KeyL: 'l',
  Semicolon: ';',
  Quote: "'",
  Enter: 'Enter',
  ShiftLeft: 'Shift',
  KeyZ: 'z',
  KeyX: 'x',
  KeyC: 'c',
  KeyV: 'v',
  KeyB: 'b',
  KeyN: 'n',
  KeyM: 'm',
  Comma: ',',
  Period: '.',
  Slash: '/',
  ShiftRight: 'Shift',
  ArrowUp: '⇧',
  ControlLeft: 'Ctrl',
  MetaLeft: 'Win',
  AltLeft: 'Alt',
  Space: ' ',
  AltRight: 'Alt',
  ControlRight: 'Ctrl',
  ArrowLeft: '⇦',
  ArrowDown: '⇩',
  ArrowRight: '⇨',
  Delete: 'del',
};
const specialArr = ['Backspace', 'Tab', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight', 'ControlRight', 'Delete'];
const keyMapEnShift = {
  ShiftLeft: 'Shift',
  Backquote: '~',
  Digit1: '!',
  Digit2: '@',
  Digit3: '#',
  Digit4: '$',
  Digit5: '%',
  Digit6: '^',
  Digit7: '&',
  Digit8: '*',
  Digit9: '(',
  Digit0: ')',
  Minus: '_',
  Equal: '+',
  Backspace: 'Backspace',
  Tab: 'Tab',
  KeyQ: 'Q',
  KeyW: 'W',
  KeyE: 'E',
  KeyR: 'R',
  KeyT: 'T',
  KeyY: 'Y',
  KeyU: 'U',
  KeyI: 'I',
  KeyO: 'O',
  KeyP: 'P',
  BracketLeft: '{',
  BracketRight: '}',
  Backslash: '|',
  CapsLock: 'CapsLock',
  KeyA: 'A',
  KeyS: 'S',
  KeyD: 'D',
  KeyF: 'F',
  KeyG: 'G',
  KeyH: 'H',
  KeyJ: 'J',
  KeyK: 'K',
  KeyL: 'L',
  Semicolon: ':',
  Quote: '"',
  Enter: 'Enter',
  KeyZ: 'Z',
  KeyX: 'X',
  KeyC: 'C',
  KeyV: 'V',
  KeyB: 'B',
  KeyN: 'N',
  KeyM: 'M',
  Comma: '<',
  Period: '>',
  Slash: '?',
  ShiftRight: 'Shift',
  ArrowUp: '⇧',
  ControlLeft: 'Ctrl',
  MetaLeft: 'Win',
  AltLeft: 'Alt',
  Space: ' ',
  AltRight: 'Alt',
  ControlRight: 'Ctrl',
  ArrowLeft: '⇦',
  ArrowDown: '⇩',
  ArrowRight: '⇨',
  Delete: 'del',
};

const keyMapRu = {
  Backquote: 'ё',
  Digit1: '1',
  Digit2: '2',
  Digit3: '3',
  Digit4: '4',
  Digit5: '5',
  Digit6: '6',
  Digit7: '7',
  Digit8: '8',
  Digit9: '9',
  Digit0: '0',
  Minus: '-',
  Equal: '=',
  Backspace: 'Backspace',
  Tab: 'Tab',
  KeyQ: 'й',
  KeyW: 'ц',
  KeyE: 'у',
  KeyR: 'к',
  KeyT: 'е',
  KeyY: 'н',
  KeyU: 'г',
  KeyI: 'ш',
  KeyO: 'щ',
  KeyP: 'з',
  BracketLeft: 'х',
  BracketRight: 'ъ',
  Backslash: '\\',
  CapsLock: 'CapsLock',
  KeyA: 'ф',
  KeyS: 'ы',
  KeyD: 'в',
  KeyF: 'а',
  KeyG: 'п',
  KeyH: 'р',
  KeyJ: 'о',
  KeyK: 'л',
  KeyL: 'д',
  Semicolon: 'ж',
  Quote: 'э',
  Enter: 'Enter',
  ShiftLeft: 'Shift',
  KeyZ: 'я',
  KeyX: 'ч',
  KeyC: 'с',
  KeyV: 'м',
  KeyB: 'и',
  KeyN: 'т',
  KeyM: 'ь',
  Comma: 'б',
  Period: 'ю',
  Slash: '.',
  ShiftRight: 'Shift',
  ArrowUp: '⇧',
  ControlLeft: 'Ctrl',
  MetaLeft: 'Win',
  AltLeft: 'Alt',
  Space: ' ',
  AltRight: 'Alt',
  ControlRight: 'Ctrl',
  ArrowLeft: '⇦',
  ArrowDown: '⇩',
  ArrowRight: '⇨',
  Delete: 'del',
};
const keyMapRuShift = {
  ShiftLeft: 'Shift',
  Backquote: 'Ё',
  Digit1: '!',
  Digit2: '"',
  Digit3: '№',
  Digit4: ';',
  Digit5: '%',
  Digit6: ':',
  Digit7: '?',
  Digit8: '*',
  Digit9: '(',
  Digit0: ')',
  Minus: '_',
  Equal: '+',
  Backspace: 'Backspace',
  Tab: 'Tab',
  KeyQ: 'Й',
  KeyW: 'Ц',
  KeyE: 'У',
  KeyR: 'К',
  KeyT: 'Е',
  KeyY: 'Н',
  KeyU: 'Г',
  KeyI: 'Ш',
  KeyO: 'Щ',
  KeyP: 'З',
  BracketLeft: 'Х',
  BracketRight: 'Ъ',
  Backslash: '/',
  CapsLock: 'CapsLock',
  KeyA: 'Ф',
  KeyS: 'Ы',
  KeyD: 'В',
  KeyF: 'А',
  KeyG: 'П',
  KeyH: 'Р',
  KeyJ: 'О',
  KeyK: 'Л',
  KeyL: 'Д',
  Semicolon: 'Ж',
  Quote: 'Э',
  Enter: 'Enter',
  KeyZ: 'Я',
  KeyX: 'Ч',
  KeyC: 'С',
  KeyV: 'М',
  KeyB: 'И',
  KeyN: 'Т',
  KeyM: 'Ь',
  Comma: 'Б',
  Period: 'Ю',
  Slash: ',',
  ShiftRight: 'Shift',
  ArrowUp: '⇧',
  ControlLeft: 'Ctrl',
  MetaLeft: 'Win',
  AltLeft: 'Alt',
  Space: ' ',
  AltRight: 'Alt',
  ControlRight: 'Ctrl',
  ArrowLeft: '⇦',
  ArrowDown: '⇩',
  ArrowRight: '⇨',
  Delete: 'del',
};

function makeRow(start, finish, object) {
  let out = '';
  for (let i = start; i <= finish; i += 1) {
    if (keyCode[i] === 'Backspace' || keyCode[i] === 'ShiftLeft') {
      out += `<div data-code="${keyCode[i]}" class="key backspace">${object[keyCode[i]]}</div>`;
    } else if (keyCode[i] === 'Tab') {
      out += `<div data-code="${keyCode[i]}" class="key small">${object[keyCode[i]]}</div>`;
    } else if (keyCode[i] === 'ShiftRight') {
      out += `<div data-code="${keyCode[i]}" class="key shiftright">${object[keyCode[i]]}</div>`;
    } else if (keyCode[i] === 'CapsLock') {
      out += `<div data-code="${keyCode[i]}" class="key medium">${object[keyCode[i]]}</div>`;
    } else if (keyCode[i] === 'Enter') {
      out += `<div data-code="${keyCode[i]}" class="key large">${object[keyCode[i]]}</div>`;
    } else if (keyCode[i] === 'Space') {
      out += `<div data-code="${keyCode[i]}" class="key extralarge">${object[keyCode[i]]}</div>`;
    } else {
      out += `<div data-code="${keyCode[i]}" class="key">${object[keyCode[i]]}</div>`;
    }
  }
  document.querySelector('#keyboard').innerHTML += `<div class="row">${out}</div>`;
}

function init(obj) {
  document.querySelector('#keyboard').innerHTML = '';
  makeRow(0, 13, obj);
  makeRow(14, 28, obj);
  makeRow(29, 41, obj);
  makeRow(42, 54, obj);
  makeRow(55, 63, obj);
}

init(keyMapEn);

const textArea = document.querySelector('.textarea');
const keys = document.querySelectorAll('.key');
const leftShift = document.querySelector('[data-code="ShiftLeft"]');
const rightShift = document.querySelector('[data-code="ShiftRight"]');
const caps = document.querySelector('[data-code="CapsLock"]');
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
    textArea.value = textArea.value.slice(0, textArea.value.length - 1);
  }
  if (event.code === 'Enter') {
    textArea.value += '\n';
  }
  if (event.code === 'Tab') {
    textArea.value += '    ';
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
  const activeKey = document.querySelector(`[data-code="${event.code}"]`);
  if (activeKey && event.code !== 'CapsLock') {
    activeKey.classList.add('active');
    if (specialArr.indexOf(event.code) === -1) {
      if (event.getModifierState('CapsLock')) {
        textArea.value += activeKey.textContent.toUpperCase();
      } else {
        textArea.value += activeKey.textContent;
      }
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
      keys.forEach((item) => {
        if (item.dataset.code !== 'CapsLock') {
          item.classList.remove('active');
        }
      });
      if (specialArr.indexOf(event.target.dataset.code) === -1) {
        textArea.value += event.target.textContent;
      } else {
        if (event.target.dataset.code === 'Tab') {
          textArea.value += '    ';
        }
        if (event.target.dataset.code === 'Enter') {
          textArea.value += '\n';
        }
        if (event.target.dataset.code === 'Backspace') {
          textArea.value = textArea.value.slice(0, textArea.value.length - 1);
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
    } else {
      changeKeys(keyMapRu);
      language = 'ru';
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('keydown', keyDownHandler);
  document.addEventListener('keyup', keyUpHandler);
  virtualKeysHandler();
  document.addEventListener('keydown', changeLanguage);
});
