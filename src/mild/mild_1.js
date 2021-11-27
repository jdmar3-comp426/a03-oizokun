/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {string} 'a + b = (a + b)'
 *
 * example: sumToString(3, 4)
 * returns: '3 + 4 = 7'
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
export function sumToString(a, b) {
  var c = a + b;
  return "'" + a + " + " + b + " = " + c + "'";
}

/**
 *
 * @param {number} startNumber
 * @param {number} endNumber
 * @returns {number[]}
 *
 * example: getIncreasingArray(3, 7)
 * returns: [ 3, 4, 5, 6, 7 ]
 *
 */
export function getIncreasingArray(startNumber, endNumber) {
  var size = endNumber - startNumber + 1;
  var array = new Array(size);
  for (let i = 0; i < size; i++) {
    array[i] = startNumber;
    startNumber++;
  }
  return array;
}

/**
 *
 * @param {number[]} numbers
 * @return {{min: number, max: number}}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */
export function maxAndMin(numbers) {
  var array = new Array(2);
  var min = numbers[0];
  var max = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (min > numbers[i]) {
      min = numbers[i];
    } else if (max < numbers[i]) {
      max = numbers[i];
    }
  }
  array[0] = min;
  array[1] = max;
  return array;
}

/**
 *
 * @param array - An array of any primitive type
 * @returns {object} Object where the keys are the values that were passed in
 * and the value was the number of times it occurred.
 *
 * example: countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]])
 * returns: {'2': 2, '3': 3, '6': 1, some: 2, hello: 1, '1,2': 1}
 *
 */
export function countArray(array) {
  var counter = {};
  for (let i = 0; i < array.length; i++) {
    if (array[i] in counter) {
      counter[array[i]]++;
    } else {
      counter[array[i]] = 1;
    }
  }
  return counter;
}
