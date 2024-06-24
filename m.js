

var phrase = "L69fuk";
phrase = phrase.toLowerCase().replace(/[^a-z]/g, "");

var alphabet = {
    'a': '.-',    'b': '-...',  'c': '-.-.', 'd': '-..',
    'e': '.',     'f': '..-.',  'g': '--.',  'h': '....',
    'i': '..',    'j': '.---',  'k': '-.-',  'l': '.-..',
    'm': '--',    'n': '-.',    'o': '---',  'p': '.--.',
    'q': '--.-',  'r': '.-.',   's': '...',  't': '-',
    'u': '..-',   'v': '...-',  'w': '.--',  'x': '-..-',
    'y': '-.--',  'z': '--..',  ' ': '/',
    '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', 
    '9': '----.', '0': '-----', 
};

phrase = phrase
    .split('')            // Transform the string into an array: ['T', 'h', 'i', 's'...
    .map(function(e){     // Replace each character with a morse "letter"
        return alphabet[e.toLowerCase()] || ''; // Lowercase only, ignore unknown characters.
    })
    .join(' ');

console.log(phrase);

phrase = phrase.split('');

console.log(JSON.stringify(phrase));

var morseL = function() {
  $('h2').removeClass('short long');
  $('h2').addClass('long');
  setTimeout(function(){
    $('h2').removeClass('long');
  }, 1200);
}
var morseS = function() {
  $('h2').removeClass('short long');
  $('h2').addClass('short');
  setTimeout(function(){
    $('h2').removeClass('short');
  }, 400);
}
var morseN = function() {
  $('h2').removeClass('short long');
}

var i = 0;
var time = 0;

function myLoop() {
  setTimeout(function() {
    if (phrase[i] === '-') {
      morseL();
      time = 1400;
    } else if (phrase[i] === '.') {
      morseS();
      time = 800;
    } else if (phrase[i] === ' ') {
      morseN();
      time = 1200;
    };

    i++;
    
    if (i < phrase.length) {
      myLoop();
    } else {
      i = 0;
      setTimeout(myLoop, 5000);
    }

  }, time);
}

setTimeout(myLoop, 1000);