import { variance } from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
  var sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
  var hold = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        hold = array[i];
        array[i] = array[j];
        array[j] = hold;
      }
    }
  }

  if (array.length % 2 != 0) {
    return array[array.length / 2 - 0.5];
  }
  return (array[array.length / 2] + array[array.length / 2 - 1]) / 2;
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
  return {
    length: getLength(array),
    sum: getSum(array),
    mean: getMean(array),
    median: getMedian(array),
    min: getMin(array),
    max: getMax(array),
    variance: getVariance(array, getMean(array)),
    standard_deviation: getStandard(array, getMean(array)),
  };
}

export function getLength(array) {
  return array.length;
}

export function getMean(array) {
  return getSum(array) / getLength(array);
}
export function getMax(array) {
  var max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
}

export function getMin(array) {
  var min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
  }
  return min;
}

export function getVariance(array, mean) {
  return (
    array
      .map(function (sample) {
        return Math.pow(mean - sample, 2);
      })
      .reduce(function sum(m, v) {
        m += v;
        return m;
      }, 0) / array.length
  );
}

export function getStandard(array, mean) {
  return Math.sqrt(getVariance(array, mean));
}
