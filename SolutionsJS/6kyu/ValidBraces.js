function validBraces(parens) {
    var re = /\(\)|\{\}|\[\]/;
    while (re.test(parens)) parens = parens.replace(re, "");
    return !parens;
}