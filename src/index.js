import './index.html';
import './style.scss';

const body = document.querySelector('body');
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
  ArrowUp: '&#8593;',
  ControlLeft: 'Ctrl',
  MetaLeft: 'Win',
  AltLeft: 'Alt',
  Space: '________',
  AltRight: 'Alt',
  ControlRight: 'Ctrl',
  ArrowLeft: '&larr;',
  ArrowDown: '&#8595;',
  ArrowRight: '&#8594;',
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
  ArrowUp: '&#8593;',
  ControlLeft: 'Ctrl',
  MetaLeft: 'Win',
  AltLeft: 'Alt',
  Space: '________',
  AltRight: 'Alt',
  ControlRight: 'Ctrl',
  ArrowLeft: '&#8592;',
  ArrowDown: '&#8595;',
  ArrowRight: '&#8594;',
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

function init() {
  makeRow(0, 13, keyMapEn);
  makeRow(14, 28, keyMapEn);
  makeRow(29, 41, keyMapEn);
  makeRow(42, 54, keyMapEn);
  makeRow(55, 63, keyMapEn);
}
init();

// const keyObj = {};
// document.addEventListener('keydown', (event) => {
//   if (event.shiftKey) {
//     keyObj[event.code] = event.key;
//     console.log(keyObj);
//   }
// });

window.addEventListener('DOMContentLoaded', () => {
  const keys = document.querySelectorAll('.key');
  const textArea = document.querySelector('.textarea');
  document.addEventListener('keydown', (event) => {
    console.log(event.code);
    event.preventDefault();
    if (specialArr.indexOf(event.code) === -1) {
      const activeKey = document.querySelector(`[data-code="${event.code}"]`);
      activeKey.classList.add('active');
      textArea.value += activeKey.textContent;
    }
  });
  document.addEventListener('keyup', () => {
    keys.forEach((key) => {
      key.classList.remove('active');
    });
  });
  keys.forEach((key) => {
    key.addEventListener('click', (event) => {
      keys.forEach((item) => {
        item.classList.remove('active');
      });
      textArea.value += event.target.textContent;
    });
  });
});
