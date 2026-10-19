const assert = require("node:assert/strict");

function ghostwriter(s: string): string {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char === "#") {
            stack.pop();
            continue;
        }

        if (char === "~") {
            stack.push(stack.at(-1));
            continue;
        }

        stack.push(char);
    }

    return stack.join("");
}

function ghostwriterFunc(s: string): string {
    return Array.from(s)
        .reduce((acc, char) => {
            if (char === "#") {
                acc.pop();
                return acc;
            }

            if (char === "~") {
                acc.push(acc.at(-1));
                return acc;
            }

            acc.push(char);
            return acc;
        }, [])
        .join("");
}

assert.equal(ghostwriter("ghost"), "ghost");
assert.equal(ghostwriter("a#~b"), "b");
assert.equal(ghostwriter("ab~c#"), "abb");
assert.equal(ghostwriter("BBB##O~"), "BOO");

assert.equal(ghostwriterFunc("ghost"), "ghost");
assert.equal(ghostwriterFunc("a#~b"), "b");
assert.equal(ghostwriterFunc("ab~c#"), "abb");
assert.equal(ghostwriterFunc("BBB##O~"), "BOO");
