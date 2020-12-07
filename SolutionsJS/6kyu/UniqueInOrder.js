//Сделать функцию которая принимает в качестве аргумента последовательность и возвращает список элементов
//без каких-либо элементов с одинаковым значением рядом друг с другом и с сохранением исходного порядка элементов.
var uniqueInOrder = function (iterable) {
    var result = [];
    for (var i = 0; i < iterable.length; i++) {
        if (iterable[i - 1] === undefined || iterable[i - 1] !== iterable[i]) {
            result.push(iterable[i]);
        }
    }
    return result;
}