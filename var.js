'use string';

const display = document.querySelector ( '.display' );
const answer = document.querySelector ( '#equals' );

const del = document.querySelector ( '#del' );
const actLast = document.querySelector ( '#last' );
const sqrt = document.querySelector ( '#sqrt' );
const degree = document.querySelector ( '#degree' );

const buttons = document.querySelectorAll ( '.function-MCFSA' );


let content = '0',
  last = 0,
  lastDisplay = [],
  lastContent = [];
