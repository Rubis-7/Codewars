function sumMix(x) { //Учитывая массив целых чисел в виде строк и чисел, верните сумму значений массива, как если бы все они были числами.
  var somme = 0;
  for (i = 0; i < x.length; i++) {
    somme += Number(x[i]);
  }
  return somme;
}