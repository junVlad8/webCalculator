'use string';

for ( let i = 0; i < buttons.length; i++ ) {
  buttons[i].onclick = function () {
    if ( content === '0' ) {
      display.value = '';
      content = '';

      display.value += this.textContent;
      content += this.textContent;

      lastDisplay[0] = display.value;
      lastContent[0] = content;
      last++;
    } else {
  		display.value += this.textContent;
  		content += this.textContent;

      lastDisplay[last] = display.value;
      lastContent[last] = content;
      last++;
    }
  }
}

answer.onclick = function () {
  display.value = eval ( content );
  content = display.value;

  for ( let i = 0, k = 1; i < last; i++, k++ ) {
    delete lastDisplay[last-k];
    delete lastContent[last-k];
  }
  last = 0;
}

del.onclick = function () {
  display.value = '0';
  content = '0';

  for ( let i = 0, k = 1; i < last; i++, k++ ) {
    delete lastDisplay[last-k];
    delete lastContent[last-k];
  }
  last = 0;
}

sqrt.onclick = function () {
  if ( content === '0' ) {
    display.value = '';
    content = '';

    display.value += '√(';
    content += 'Math.sqrt(';

    lastDisplay[0] = display.value;
    lastContent[0] = content;
    last++;
  } else {
    display.value += '√(';
    content += 'Math.sqrt(';

    lastDisplay[last] = display.value;
    lastContent[last] = content;
    last++;
  }
}

actLast.onclick = function () {
  display.value = lastDisplay[last-1];
  content = lastContent[last-1];

  delete lastDisplay[last-1];
  delete lastContent[last-1];

  last--;
}
