const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const twentyPlus = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

const makeString = (value: number): string => {
  const dollarsRev: string[] = value.toString().split('').reverse();
  let words = '';

  for (let i = 0; i < dollarsRev.length; i++) {
    const digit = parseInt(dollarsRev[i]);
    switch (i) {
      case 0:
        words = `${ones[digit]} `;
        break;
      case 1:
        const firstDigit = parseInt(dollarsRev[0]);
        if (digit === 0) {
          if (value > 99 && firstDigit > 0) {
            words = `and ${words}`;
          } else {
            words = '';
          }
        } else if (digit === 1) {
          words = `${tens[firstDigit]} `;
        } else {
          words = `${twentyPlus[digit - 2]}${words === 'zero' ? ' ' : ' ' + words}`;
        }
        break;
      case 2:
        words = `${ones[digit]} hundred ${words}`;
        break;
    }
  }
  return words;
}

const convertToWords = (value: number): string => {
  if (value > 1000) {
    return 'number too big';
  }
  if (value < 0) {
    return 'number too small';
  }
  if (value === 0) {
    return 'zero dollars';
  }
  if (value === 1000) {
    return 'one thousand dollars';
  }

  const dollars: number = Math.floor(value);
  const cents: number = Math.round(value % 1 * 100);

  let output = '';
  const dollarWords = makeString(dollars);
  const centsWords = makeString(cents);

  output = `${dollarWords}dollar${dollars === 1 ? '' : 's'}`;
  if (cents > 0) {
    if (dollars === 0) {
      output = '';
    }
    output += `${dollars ? ' and ' : ''}${centsWords}cent${cents === 1 ? '' : 's'}`;
  }

  return output.trim();
}

export default convertToWords;