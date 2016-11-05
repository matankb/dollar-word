let display = document.getElementById('display');

document.getElementById('input').addEventListener('input', updateDisplay)

function getNumericalValue(word) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let letters = word.split('');
  let total = 0;
  letters.forEach(letter => {
     total += alphabet.indexOf(letter) + 1;
  })
  return total;
}

function isDollarWord(word) {
    return getNumericalValue(word) === 100;
}

function isSingleWord(word) {
  return word.indexOf(' ') === -1;
}
function isEmpty(word) {
  return word === '';
}

function updateDisplay(e) {
  let word = e.target.value;
  if (isEmpty(word)) {
    display.innerHTML = 'Enter a word';
    setColor("gray");
  }
  else if (isDollarWord(word)) {
    setColor("green")
    if (isSingleWord(word)) {
      display.innerHTML = `Yes, "${word}" is a dollar word!`;
    } else {
      display.innerHTML = `Yes, "${word}" is a dollar phrase!`;
    }
  } else {
    setColor("red")
    display.innerHTML = `No, the value of "${word}" is <b>${getNumericalValue(word)}</b>, not 100`;
  }
}

function setColor(color) {
  const colors = {
    // format:  background, then input underline
    green: ["rgb(81, 238, 158)", "rgb(75, 179, 126)"],
    red: ["rgb(245, 78, 78)", "rgb(205, 63, 63)"],
    gray: ["rgb(212, 212, 212)", "rgb(82, 85, 82)"],
  }
  console.log(color);
  document.body.style.background = colors[color][0];
  document.getElementById('input').style.borderBottomColor = colors[color][1];
}

display.innerHTML = "Enter a word";
setColor("gray");
