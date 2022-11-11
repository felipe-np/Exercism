// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */

export function totalBirdCount(birdsPerDay) {
  let soma = 0;

  for (let i = 0; i < birdsPerDay.length ; i++){
    soma += birdsPerDay[i];
  }
  
  return soma;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  const startDay = (week - 1) * 7;
  const endDay = startDay + 7;
  let soma = 0;

  for (let i = startDay; i < endDay ; i++){
    soma += birdsPerDay[i];
  }
  
  return soma;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i]++;
  }

  return birdsPerDay;
}
