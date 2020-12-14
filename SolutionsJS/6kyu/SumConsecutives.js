function sumConsecutives(s) {
    return s.reduce(function (prev, curr, i, arr) {
        if (curr != arr[i - 1]) prev.push(curr);
        else prev[prev.length - 1] += curr;
        return prev;
    }, []);
}