import mpg_data from "./data/mpg_data.js";
import { getStatistics } from "./medium_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/

/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */
export const allCarStats = {
  avgMpg: getAvg(),
  allYearStats: allYear(),
  ratioHybrids: getHybrid(),
};

export function getAvg() {
  var city = 0;
  var highway = 0;
  for (let i = 0; i < mpg_data.length; i++) {
    city += mpg_data[i].city_mpg;
    highway += mpg_data[i].highway_mpg;
  }
  city = city / mpg_data.length;
  highway = highway / mpg_data.length;
  return { city: city, highway: highway };
}

export function allYear() {
  var array = new Array(mpg_data.length);
  for (let i = 0; i < mpg_data.length; i++) {
    array[i] = mpg_data[i].year;
  }
  return getStatistics(array);
}

export function getHybrid() {
  var ratio = mpg_data.length;
  var hybridCount = 0;
  for (let i = 0; i < mpg_data.length; i++) {
    if (mpg_data[i].hybrid == true) {
      hybridCount++;
    }
  }
  return hybridCount / ratio;
}

/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */
export default {
  makerHybrids: undefined,
  avgMpgByYearAndHybrid: undefined,
};

console.log(getMakers());

export function getMakers() {
  var array = new Array();
  var size = 0;
  for (let i = 0; i < mpg_data.length; i++) {
    if (mpg_data[i].hybrid == true) {
      array[size] = { make: mpg_data[i].make, hybrids: mpg_data[i].id };
      size++;
    }
  }

  var counter = new Array();
  for (let i = 0; i < array.length; i++) {
    if (array[i].make in counter) {
      counter[array[i].make] = {
        make: array[i].make,
        hybrids: array[i].hybrids,
      };
    } else {
      counter[array[i].make] = {
        make: array[i].make,
        hybrids: array[i].hybrids,
      };
    }
  }
  return counter;
}
