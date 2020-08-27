//import helper function
const { format_date } = require('../utils/helpers');
const { format_plural } = require('../utils/helpers');
const { format_url } = require('../utils/helpers');

// MM/DD/YYYY "will this function return the date that we are expecting?"
test('format_date() returns a date string', () => {
  const date = new Date('1993-04-22 16:12:03');

  expect(format_date(date)).toBe('4/22/1993');
});

test('format_plural() returns a plural/non plural', () => {
  expect(format_plural("Point", 2)).toBe('Points');
});

test('format_url() returns a simplified url string', () => {
  const url1 = format_url('http://amazon.com/page/2');
  const url2 = format_url('https://www.stackoverflow.com/abcdefg/');
  const url3 = format_url('https://www.google.com?q=goodbye');

  expect(url1).toBe('amazon.com');
  expect(url2).toBe('stackoverflow.com');
  expect(url3).toBe('google.com');
});