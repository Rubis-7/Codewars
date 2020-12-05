//-----------1-----------https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/javascript
function switchItUp(number) { //Если указано число от 0 до 9, верните его словами Вход :: 1 Выход :: «Один».
  switch (number) {
    case 0: return 'Zero';
    case 1: return 'One';
    case 2: return 'Two';
    case 3: return 'Three';
    case 4: return 'Four';
    case 5: return 'Five';
    case 6: return 'Six';
    case 7: return 'Seven';
    case 8: return 'Eight';
    case 9: return 'Nine';
  }
}

//-----------2-----------https://www.codewars.com/kata/57eaeb9578748ff92a000009/javascript
function sumMix(x) { //Учитывая массив целых чисел в виде строк и чисел, верните сумму значений массива, как если бы все они были числами.
  var somme = 0;
  for (i = 0; i < x.length; i++) {
    somme += Number(x[i]);
  }
  return somme;
}

//-----------3-----------https://www.codewars.com/kata/5a4ea304b3bfa89a9900008e/javascript
const maxNumber = n => //Форма наибольшего. Например 3453 ==> 5433
  +String(n)
    .split``
    .sort()
    .reverse()
    .join('')

//-----------4-----------https://www.codewars.com/kata/563cf89eb4747c5fb100001b
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

//-----------5-----------https://www.codewars.com/kata/571edd157e8954bab500032d
var v1 = 50; v2 = 100, v3 = 150, v4 = 200, v5 = 2, v6 = 250 //Выбирая из v1--v6 сделав эти функции возвращаемыми равными 100
function equal1() {
  var a = v1
  var b = v1
  return a + b;
}
function equal2() {
  var a = v3
  var b = v1
  return a - b;
}
function equal3() {
  var a = v1
  var b = v5
  return a * b;
}
function equal4() {
  var a = v4
  var b = v5
  return a / b;
}
function equal5() {
  var a = v6
  var b = v3
  return a % b;
}

//-----------6-----------https://www.codewars.com/kata/571edea4b625edcb51000d8e
var a1 = "A", a2 = "a", b1 = "B", b2 = "b", c1 = "C", c2 = "c", d1 = "D", d2 = "d", e1 = "E", e2 = "e", n1 = "N", n2 = "n"
function Dad() {
  return d1 + a2 + d2;
}
function Bee() {
  return b1 + e2 + e2;
}
function banana() {
  return b2 + a2 + n2 + a2 + n2 + a2;
}
function answer1() {
  return "no";
}
function answer2() {
  return "no";
}
function answer3() {
  return "yes";
}

//-----------7-----------https://www.codewars.com/kata/571effabb625ed9b0600107a
function getLength(arr) {
  //return length of arr
  return arr.length
}
function getFirst(arr) {
  //return the first element of arr
  return arr[0]
}
function getLast(arr) {
  //return the last element of arr
  return arr[arr.length - 1]
}
function pushElement(arr) {
  var el = 1;
  //push el to arr
  arr.push(el);
  return arr
}
function popElement(arr) {
  //pop an element from arr
  arr.pop();
  return arr
}

//-----------8-----------https://www.codewars.com/kata/571f1eb77e8954a812000837
function animal(obj) {
  return 'This ' + obj.color + ' ' + obj.name + ' has ' + obj.legs + ' legs.'
}

//-----------9-----------https://www.codewars.com/kata/571f832f07363d295d001ba8
function trueOrFalse(val) {
  if (Boolean(val) === false)
    return 'false';
  else return 'true';
}

//-----------10-----------https://www.codewars.com/kata/54834b3559e638b39d0009a2/solutions/javascript
function OnceNamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.fullName = this.firstName + ' ' + this.lastName;
  Object.freeze(this)
}
//-----------11-----------https://www.codewars.com/kata/557e508a47c7e9adf9000062/javascript
Object.prototype.description = `TODO: GIVE ME A DESCRIPTION`;

//-----------12-----------https://www.codewars.com/kata/526471539d52735c620000c6/javascript
function Counter() {
  this.value = 0;
}

Counter.prototype.increase = function () {
  this.value++;
};

Counter.prototype.getValue = function () {
  return this.value;
};

Counter.prototype.reset = function () {
  this.value = 0;
};




