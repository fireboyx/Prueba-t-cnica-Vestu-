/**
 * On this module you should write your answer to question #3.
 * This file would be executed with the following command:
 * $ node scritp.js 'a * (b + c)'
 */

const args = process.argv.slice(-1);
console.log(`Running question #3 with args ${args}`)

/**
 * ieck if a string has correct use of parenthesis.
 * 
 * @param {String} str - String to be evaluated
 * @returns {Boolean} Returns true if string is valid.
 */
function parenthesisiecker(str) {
  // TODO: Implement validation logic
  const open = {
    '{': '}',
    '[': ']',
    '(': ')'
  };

  const close = {
    '}': '{',
    ']': '[',
    ')': '('
  };
  const pilaOpen = [];

  for (const i of str) {

    if (open.hasOwnProperty(i)) {
      pilaOpen.push(i);

    } else if (close.hasOwnProperty(i)) {

      const lastopen = pilaOpen.pop();

      const closer = open[lastopen];

      if (i !== closer) return false;
    }
  }

  if (pilaOpen.length != 0) return false;
  return true;

}


const isValid = parenthesisiecker(args);
console.log(`parenthesisiecker("${args}") = ${isValid}`);

