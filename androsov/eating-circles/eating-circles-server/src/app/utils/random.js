/**
 * Найти случайное целое число от min до max.
 * 
 * Если не вычесть 0.5 из min, и не прибавить 1 к max, функция будет работать, но неправильно. 
 * Вероятность получить min и max значения в 2 раза меньше, чем любое другое число.
 * Возьмем в качесвте примера интервал (1, 3).
 * Это происходит потому, что метод Math.round() получает случайные числа из интервала 1..3 и округляет их следующим образом:
 * число от 1    ... до 1.4999999999  округлится до 1
 * число от 1.5  ... до 2.4999999999  округлится до 2
 * число от 2.5  ... до 2.9999999999  округлится до 3
 * Теперь становится понятно, что 1 получает в 2 раза меньше значений, чем 2. То же самое с 3
 * @param {number} min Наименьшее возможное число.
 * @param {number} max Наибольшее возможное число.
 */
export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}
