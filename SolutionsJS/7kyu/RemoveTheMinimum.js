//Учитывая массив целых чисел, удалите наименьшее значение. 
//Не изменяйте исходный массив / список . Если есть несколько элементов с одинаковым значением, удалите один с меньшим 
//индексом. Если вы получили пустой массив / список, верните пустой массив / список.
function removeSmallest(numbers) {
  let min = numbers[0];
  let newA = [];
  let index = 0;
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) { min = numbers[i]; index = i }
  }
  for (let i = 0; i < numbers.length; i++) {
    if (i !== index) { newA.push(numbers[i]) }
    else { continue; }
  }
  return newA;
}