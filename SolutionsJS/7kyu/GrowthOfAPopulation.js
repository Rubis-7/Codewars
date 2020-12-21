function nbYear(p0, percent, aug, p) {
    var count = 0;
    while (p0 < p) {
        p0 += p0 * percent / 100 + aug;
        count++;
    }
    return count;
}