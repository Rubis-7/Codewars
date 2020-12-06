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