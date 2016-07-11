"use strict";
;
function padLeft(l, s, t) {
    while (s.length < l)
        s = t + s;
    return s;
}
function binaryFromRule(i) {
    return padLeft(8, i.toString(2), "0");
}
function outcomes(r) {
    return { "111": r[0],
        "110": r[1],
        "101": r[2],
        "100": r[3],
        "011": r[4],
        "010": r[5],
        "001": r[6],
        "000": r[7]
    };
}
function pattern(st, i) {
    return "" + (st[i - 1] || 0) + st[i] + (st[i + 1] || 0);
}
function compute(st, r) {
    var outcome = outcomes(binaryFromRule(r));
    var newState = [];
    for (var i = 0; i < st.length; i++)
        newState[i] = outcome[pattern(st, i)];
    return newState;
}
exports.compute = compute;
