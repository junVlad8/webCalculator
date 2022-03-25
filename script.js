'use string';

for ( let i = 0; i < buttons.length; i++ ) {
  buttons[i].onclick = function () {
    if ( content === '0' ) {
      display.value = '';
      content = '';

      display.value += this.textContent;
      content += this.textContent;
    } else {
  		display.value += this.textContent;
  		content += this.textContent;
    }
  }
}

answer.onclick = function () {
  display.value = eval ( content );
  content = display.value;
}

del.onclick = function () {
  display.value = '0';
  content = '0';
}

sqrt.onclick = function () {
  if ( content === '0' ) {
    display.value = '';
    content = '';

    display.value += '√(';
    content += 'Math.sqrt(';
  } else {
    display.value += '√(';
    content += 'Math.sqrt(';
  }
}
