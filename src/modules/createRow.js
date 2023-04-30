import { keyCode } from './alphabet.js';

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

export default makeRow;
