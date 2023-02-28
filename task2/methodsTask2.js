export function calculate (str) {
    let methods = {
        "-": (a, b) => BigInt(a) - BigInt(b),
        "+": (a, b) => BigInt(a) + BigInt(b),
        "*": (a, b) => BigInt(a) * BigInt(b),
        "/": (a, b) => BigInt(a) / BigInt(b)
    };

    let split = str.split(' '),
        a = split[0],
        op = split[1],
        b = split[2]

        if (!methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
    }

    return methods[op](a, b);

}

