function dontGiveMeFive(start, end) {
    let res = [];
    for (let i = start; i <= end; i++) {
        if (!i.toString().includes('5')) res.push(i);
    }
    return res.length;
}