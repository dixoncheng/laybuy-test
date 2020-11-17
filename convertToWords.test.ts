import convertToWords from './convertToWords';

const tests = [
  { value: -1, words: 'number too small' },
  { value: 0, words: 'zero dollars' },
  { value: 1, words: 'one dollar' },
  { value: 10, words: 'ten dollars' },
  { value: 11, words: 'eleven dollars' },
  { value: 21, words: 'twenty one dollars' },
  { value: 100, words: 'one hundred dollars' },
  { value: 102, words: 'one hundred and two dollars' },
  { value: 999, words: 'nine hundred ninety nine dollars' },
  { value: 1000, words: 'one thousand dollars' },
  { value: 1001, words: 'number too big' },
  { value: .01, words: 'one cent' },
  { value: .10, words: 'ten cents' },
  { value: .11, words: 'eleven cents' },
  { value: .21, words: 'twenty one cents' },
  { value: 1.01, words: 'one dollar and one cent' },
  { value: 1.10, words: 'one dollar and ten cents' },
  { value: 11.11, words: 'eleven dollars and eleven cents' },
  { value: 102.11, words: 'one hundred and two dollars and eleven cents' },
]

describe('Convert To Words', () => {
  for (const { value, words } of tests) {
    it(`${value} = ${words}`, () => {
      expect(convertToWords(value)).toBe(words);
    });
  }
});
