const assert = require("node:assert/strict");

function maxCandy(houses: number[]): number {
    if (houses.length === 0) {
        return 0;
    }

    if (houses.length <= 2) {
        return Math.max(...houses);
    }

    const first = houses[0] + maxCandy(houses.slice(2));
    const second = houses[1] + maxCandy(houses.slice(3));

    return Math.max(first, second);
}

function maxCandyIter(houses: number[]): number {
    let first = 0;
    let second = 0;

    while (houses.length > 2) {
        first += houses[0];
        second += houses[1];

        houses = houses.slice(2);
    }

    if (houses.length > 0) {
        const max = Math.max(...houses);
        first += max;
        second += max;
    }

    return Math.max(first, second);
}

assert.equal(maxCandy([2, 7, 9, 3, 1]), 12);
assert.equal(maxCandy([5, 1, 1, 5]), 10);
assert.equal(maxCandy([4]), 4);

assert.equal(maxCandyIter([2, 7, 9, 3, 1]), 12);
assert.equal(maxCandyIter([5, 1, 1, 5]), 10);
assert.equal(maxCandyIter([4]), 4);
