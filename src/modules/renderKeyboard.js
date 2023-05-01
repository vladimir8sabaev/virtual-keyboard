const alphabet = [
  {
    keycode: 'Backquote',
    keyEn: '`',
    keyRu: 'ё',
    keyEnShift: '~',
    keyRuShift: 'Ё',
    class: 'ordinary',
  },
  {
    keycode: 'Digit1',
    keyEn: '1',
    keyRu: '1',
    keyEnShift: '!',
    keyRuShift: '!',
    class: 'ordinary',
  },
  {
    keycode: 'Digit2',
    keyEn: '2',
    keyRu: '2',
    keyEnShift: '@',
    keyRuShift: '"',
    class: 'ordinary',
  },
  {
    keycode: 'Digit3',
    keyEn: '3',
    keyRu: '3',
    keyEnShift: '#',
    keyRuShift: '№',
    class: 'ordinary',
  },
  {
    keycode: 'Digit4',
    keyEn: '4',
    keyRu: '4',
    keyEnShift: '$',
    keyRuShift: ';',
    class: 'ordinary',
  },
  {
    keycode: 'Digit5',
    keyEn: '5',
    keyRu: '5',
    keyEnShift: '%',
    keyRuShift: '%',
    class: 'ordinary',
  },
  {
    keycode: 'Digit6',
    keyEn: '6',
    keyRu: '6',
    keyEnShift: '^',
    keyRuShift: ':',
    class: 'ordinary',
  },
  {
    keycode: 'Digit7',
    keyEn: '7',
    keyRu: '7',
    keyEnShift: '&',
    keyRuShift: '?',
    class: 'ordinary',
  },
  {
    keycode: 'Digit8',
    keyEn: '8',
    keyRu: '8',
    keyEnShift: '*',
    keyRuShift: '*',
    class: 'ordinary',
  },
  {
    keycode: 'Digit9',
    keyEn: '9',
    keyRu: '9',
    keyEnShift: '(',
    keyRuShift: '(',
    class: 'ordinary',
  },
  {
    keycode: 'Digit0',
    keyEn: '0',
    keyRu: '0',
    keyEnShift: ')',
    keyRuShift: ')',
    class: 'ordinary',
  },
  {
    keycode: 'Minus',
    keyEn: '-',
    keyRu: '-',
    keyEnShift: '_',
    keyRuShift: '_',
    class: 'ordinary',
  },
  {
    keycode: 'Equal',
    keyEn: '=',
    keyRu: '=',
    keyEnShift: '+',
    keyRuShift: '+',
    class: 'ordinary',
  },
  {
    keycode: 'Backspace',
    keyEn: 'Backspace',
    keyRu: 'Backspace',
    keyEnShift: 'Backspace',
    keyRuShift: 'Backspace',
    class: 'backspace',
  },
  {
    keycode: 'Tab',
    keyEn: 'Tab',
    keyRu: 'Tab',
    keyEnShift: 'Tab',
    keyRuShift: 'Tab',
    class: 'small',
  },
  {
    keycode: 'KeyQ',
    keyEn: 'q',
    keyRu: 'й',
    keyEnShift: 'Q',
    keyRuShift: 'Й',
    class: 'ordinary',
  },
  {
    keycode: 'KeyW',
    keyEn: 'w',
    keyRu: 'ц',
    keyEnShift: 'W',
    keyRuShift: 'Ц',
    class: 'ordinary',
  },
  {
    keycode: 'KeyE',
    keyEn: 'e',
    keyRu: 'у',
    keyEnShift: 'E',
    keyRuShift: 'У',
    class: 'ordinary',
  },
  {
    keycode: 'KeyR',
    keyEn: 'r',
    keyRu: 'к',
    keyEnShift: 'R',
    keyRuShift: 'К',
    class: 'ordinary',
  },
  {
    keycode: 'KeyT',
    keyEn: 't',
    keyRu: 'е',
    keyEnShift: 'T',
    keyRuShift: 'Е',
    class: 'ordinary',
  },
  {
    keycode: 'KeyY',
    keyEn: 'y',
    keyRu: 'н',
    keyEnShift: 'Y',
    keyRuShift: 'Н',
    class: 'ordinary',
  },
  {
    keycode: 'KeyU',
    keyEn: 'u',
    keyRu: 'г',
    keyEnShift: 'U',
    keyRuShift: 'Г',
    class: 'ordinary',
  },
  {
    keycode: 'KeyI',
    keyEn: 'i',
    keyRu: 'ш',
    keyEnShift: 'I',
    keyRuShift: 'Ш',
    class: 'ordinary',
  },
  {
    keycode: 'KeyO',
    keyEn: 'o',
    keyRu: 'щ',
    keyEnShift: 'O',
    keyRuShift: 'Щ',
    class: 'ordinary',
  },
  {
    keycode: 'KeyP',
    keyEn: 'p',
    keyRu: 'з',
    keyEnShift: 'P',
    keyRuShift: 'З',
    class: 'ordinary',
  },
  {
    keycode: 'BracketLeft',
    keyEn: '[',
    keyRu: 'х',
    keyEnShift: '{',
    keyRuShift: 'Х',
    class: 'ordinary',
  },
  {
    keycode: 'BracketRight',
    keyEn: ']',
    keyRu: 'ъ',
    keyEnShift: '}',
    keyRuShift: 'Ъ',
    class: 'ordinary',
  },
  {
    keycode: 'Backslash',
    keyEn: '\\',
    keyRu: '\\',
    keyEnShift: '|',
    keyRuShift: '/',
    class: 'ordinary',
  },
  {
    keycode: 'Delete',
    keyEn: 'del',
    keyRu: 'del',
    keyEnShift: 'del',
    keyRuShift: 'del',
    class: 'ordinary',
  },
  {
    keycode: 'CapsLock',
    keyEn: 'CapsLock',
    keyRu: 'CapsLock',
    keyEnShift: 'CapsLock',
    keyRuShift: 'CapsLock',
    class: 'medium',
  },
  {
    keycode: 'KeyA',
    keyEn: 'a',
    keyRu: 'ф',
    keyEnShift: 'A',
    keyRuShift: 'Ф',
    class: 'ordinary',
  },
  {
    keycode: 'KeyS',
    keyEn: 's',
    keyRu: 'ы',
    keyEnShift: 'S',
    keyRuShift: 'Ы',
    class: 'ordinary',
  },
  {
    keycode: 'KeyD',
    keyEn: 'd',
    keyRu: 'в',
    keyEnShift: 'D',
    keyRuShift: 'В',
    class: 'ordinary',
  },
  {
    keycode: 'KeyF',
    keyEn: 'f',
    keyRu: 'а',
    keyEnShift: 'F',
    keyRuShift: 'А',
    class: 'ordinary',
  },
  {
    keycode: 'KeyG',
    keyEn: 'g',
    keyRu: 'п',
    keyEnShift: 'G',
    keyRuShift: 'П',
    class: 'ordinary',
  },
  {
    keycode: 'KeyH',
    keyEn: 'h',
    keyRu: 'р',
    keyEnShift: 'H',
    keyRuShift: 'Р',
    class: 'ordinary',
  },
  {
    keycode: 'KeyJ',
    keyEn: 'j',
    keyRu: 'о',
    keyEnShift: 'J',
    keyRuShift: 'О',
    class: 'ordinary',
  },
  {
    keycode: 'KeyK',
    keyEn: 'k',
    keyRu: 'л',
    keyEnShift: 'K',
    keyRuShift: 'Л',
    class: 'ordinary',
  },
  {
    keycode: 'KeyL',
    keyEn: 'l',
    keyRu: 'д',
    keyEnShift: 'L',
    keyRuShift: 'Д',
    class: 'ordinary',
  },
  {
    keycode: 'Semicolon',
    keyEn: ';',
    keyRu: 'ж',
    keyEnShift: ':',
    keyRuShift: 'Ж',
    class: 'ordinary',
  },
  {
    keycode: 'Quote',
    keyEn: "'",
    keyRu: 'э',
    keyEnShift: '"',
    keyRuShift: 'Э',
    class: 'ordinary',
  },
  {
    keycode: 'Enter',
    keyEn: 'Enter',
    keyRu: 'Enter',
    keyEnShift: 'Enter',
    keyRuShift: 'Enter',
    class: 'large',
  },
  {
    keycode: 'ShiftLeft',
    keyEn: 'Shift',
    keyRu: 'Shift',
    keyEnShift: 'Shift',
    keyRuShift: 'Shift',
    class: 'backspace',
  },
  {
    keycode: 'KeyZ',
    keyEn: 'z',
    keyRu: 'я',
    keyEnShift: 'Z',
    keyRuShift: 'Я',
    class: 'ordinary',
  },
  {
    keycode: 'KeyX',
    keyEn: 'x',
    keyRu: 'ч',
    keyEnShift: 'X',
    keyRuShift: 'Ч',
    class: 'ordinary',
  },
  {
    keycode: 'KeyC',
    keyEn: 'c',
    keyRu: 'с',
    keyEnShift: 'C',
    keyRuShift: 'С',
    class: 'ordinary',
  },
  {
    keycode: 'KeyV',
    keyEn: 'v',
    keyRu: 'м',
    keyEnShift: 'V',
    keyRuShift: 'М',
    class: 'ordinary',
  },
  {
    keycode: 'KeyB',
    keyEn: 'b',
    keyRu: 'и',
    keyEnShift: 'B',
    keyRuShift: 'И',
    class: 'ordinary',
  },
  {
    keycode: 'KeyN',
    keyEn: 'n',
    keyRu: 'т',
    keyEnShift: 'N',
    keyRuShift: 'Т',
    class: 'ordinary',
  },
  {
    keycode: 'KeyM',
    keyEn: 'm',
    keyRu: 'ь',
    keyEnShift: 'M',
    keyRuShift: 'Ь',
    class: 'ordinary',
  },
  {
    keycode: 'Comma',
    keyEn: ',',
    keyRu: 'б',
    keyEnShift: '<',
    keyRuShift: 'Б',
    class: 'ordinary',
  },
  {
    keycode: 'Period',
    keyEn: '.',
    keyRu: 'ю',
    keyEnShift: '>',
    keyRuShift: 'Ю',
    class: 'ordinary',
  },
  {
    keycode: 'Slash',
    keyEn: '/',
    keyRu: '.',
    keyEnShift: '?',
    keyRuShift: ',',
    class: 'ordinary',
  },
  {
    keycode: 'ArrowUp',
    keyEn: '⇧',
    keyRu: '⇧',
    keyEnShift: '⇧',
    keyRuShift: '⇧',
    class: 'ordinary',
  },
  {
    keycode: 'ShiftRight',
    keyEn: 'Shift',
    keyRu: 'Shift',
    keyEnShift: 'Shift',
    keyRuShift: 'Shift',
    class: 'shiftright',
  },
  {
    keycode: 'ControlLeft',
    keyEn: 'Ctrl',
    keyRu: 'Ctrl',
    keyEnShift: 'Ctrl',
    keyRuShift: 'Ctrl',
    class: 'ordinary',
  },
  {
    keycode: 'MetaLeft',
    keyEn: 'Win',
    keyRu: 'Win',
    keyEnShift: 'Win',
    keyRuShift: 'Win',
    class: 'ordinary',
  },
  {
    keycode: 'AltLeft',
    keyEn: 'Alt',
    keyRu: 'Alt',
    keyEnShift: 'Alt',
    keyRuShift: 'Alt',
    class: 'ordinary',
  },
  {
    keycode: 'Space',
    keyEn: ' ',
    keyRu: ' ',
    keyEnShift: ' ',
    keyRuShift: ' ',
    class: 'extralarge',
  },
  {
    keycode: 'AltRight',
    keyEn: 'Alt',
    keyRu: 'Alt',
    keyEnShift: 'Alt',
    keyRuShift: 'Alt',
    class: 'ordinary',
  },
  {
    keycode: 'ArrowLeft',
    keyEn: '⇦',
    keyRu: '⇦',
    keyEnShift: '⇦',
    keyRuShift: '⇦',
    class: 'ordinary',
  },
  {
    keycode: 'ArrowDown',
    keyEn: '⇩',
    keyRu: '⇩',
    keyEnShift: '⇩',
    keyRuShift: '⇩',
    class: 'ordinary',
  },
  {
    keycode: 'ArrowRight',
    keyEn: '⇨',
    keyRu: '⇨',
    keyEnShift: '⇨',
    keyRuShift: '⇨',
    class: 'ordinary',
  },
  {
    keycode: 'ControlRight',
    keyEn: 'Ctrl',
    keyRu: 'Ctrl',
    keyEnShift: 'Ctrl',
    keyRuShift: 'Ctrl',
    class: 'ordinary',
  },
];

class KeyboardKey {
  constructor(object) {
    this.data = object.keycode;
    this.class = object.class;
    this.keyEn = object.keyEn;
    this.keyRu = object.keyRu;
    this.keyRuShift = object.keyRuShift;
    this.keyEnShift = object.keyEnShift;
  }

  render() {
    const key = document.createElement('div');
    key.classList.add('key');
    key.classList.add(`${this.class}`);
    key.setAttribute('data-code', `${this.data}`);
    return key;
  }
}

function makeRow(start, finish) {
  const row = document.createElement('div');
  row.classList.add('row');
  document.querySelector('#keyboard').append(row);
  for (let i = start; i <= finish; i += 1) {
    const key = new KeyboardKey(alphabet[i]);
    row.append(key.render());
  }
}
function init() {
  document.querySelector('#keyboard').innerHTML = '';
  makeRow(0, 13);
  makeRow(14, 28);
  makeRow(29, 41);
  makeRow(42, 54);
  makeRow(55, 63);
}

function createMarkup() {
  document.querySelector('body').innerHTML = `
                  <textarea class="textarea" name="textarea"
                  id="textarea" cols="100" rows="20"></textarea>
                  <div id="keyboard"></div>
                  <h2 class="descr">Keyboard was made on Windows</h2>
                  <h2 class="descr">Click left Ctrl + left Alt to change language</h2>
                  `;
}

export { KeyboardKey };
export { alphabet };
export { makeRow, init, createMarkup };
