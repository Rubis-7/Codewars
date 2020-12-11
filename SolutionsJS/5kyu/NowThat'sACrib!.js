function myCrib(n) {
    var s = '';
    for (var i = 0; i < 2 * n; i++)
        s += ' ';
    for (var i = 0; i < 2 * n + 1; i++)
        s += '_'
    for (var i = 0; i < 2 * n; i++)
        s += ' ';
    s += '\n';

    for (var i = 0; i < 2 * n; i++) {
        for (var j = i; j < 2 * n - 1; j++)
            s += ' ';
        s += '/';
        for (var j = 0; j < 2 * (i + n) + 1; j++)
            s += '_';
        s += '\\';
        for (var j = i; j < 2 * n - 1; j++)
            s += ' ';
        s += '\n';
    }

    for (var i = 0; i < n - 1; i++) {
        s += '|';
        for (var j = 0; j < 2 * (2 * n + n) - 1; j++)
            s += ' ';
        s += '|';
        s += '\n';
    }

    s += '|';
    for (var j = 0; j < 2 * n; j++)
        s += ' ';
    for (var j = 0; j < 2 * n - 1; j++)
        s += '_';
    for (var j = 0; j < 2 * n; j++)
        s += ' ';
    s += '|';
    s += '\n';

    for (var i = 0; i < n - 1; i++) {
        s += '|';
        for (var j = 0; j < 2 * n - 1; j++)
            s += ' ';
        s += '|';
        for (var j = 0; j < 2 * n - 1; j++)
            s += ' ';
        s += '|';
        for (var j = 0; j < 2 * n - 1; j++)
            s += ' ';
        s += '|';
        s += '\n';
    }

    s += '|';
    for (var j = 0; j < 2 * n - 1; j++)
        s += '_';
    s += '|';
    for (var j = 0; j < 2 * n - 1; j++)
        s += '_';
    s += '|';
    for (var j = 0; j < 2 * n - 1; j++)
        s += '_';
    s += '|';
    return s;
}