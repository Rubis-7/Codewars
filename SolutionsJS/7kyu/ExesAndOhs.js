function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}