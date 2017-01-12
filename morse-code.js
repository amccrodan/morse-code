var morseDict = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  x: '-..-',
  y: '-.--',
  z: '--..'
};

function englishToMorse (inputString) {
  inputString = inputString.toLowerCase();
  var outputStr = '';

  for (var i = 0; i < inputString.length; i++) {
    var currentChar = inputString.charAt(i);
    if (currentChar === ' ') {
      outputStr += '/';
    } else {
      outputStr += morseDict[currentChar] + ' ';
    }
  }

  return outputStr;
}

function findEnglishLetter (morseLetter) {
  var englishLetter = '';
  for (var letter in morseDict) {
    if (morseDict[letter] === morseLetter) {
      return letter;
    }
  }
}

function morseToEnglish (inputString) {
  var outputStr = '';
  var currentMorseLetter = '';

  for (var i = 0; i < inputString.length; i++) {
    var currentChar = inputString.charAt(i);
    if (currentChar === ' ') {
      outputStr += findEnglishLetter(currentMorseLetter);
      currentMorseLetter = '';
    } else if (currentChar === '/') {
      outputStr += ' ';
    } else {
      currentMorseLetter += inputString.charAt(i);
    }
  }

  outputStr += findEnglishLetter(currentMorseLetter);

  return outputStr;
}

// TEST STATEMENTS

console.log(englishToMorse('sos'));
console.log(englishToMorse('andrew mccrodan'));

console.log(morseToEnglish('... --- ...'));
console.log(morseToEnglish('.- -. -.. .-. . .-- /-- -.-. -.-. .-. --- -.. .- -.'));