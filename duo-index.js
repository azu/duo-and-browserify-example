var uid = require('matthewmueller/uid');
var fmt = require('yields/fmt');

var msg = fmt('Your unique ID is %s!', uid());

var display = document.querySelector('.display');
var text = document.createTextNode(msg);

display.appendChild(text);