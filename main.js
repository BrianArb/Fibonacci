
function fib(n) {
    const cache = {};
    let result = 0;

    for (let i = 1; i <= n; i++) {
        if (i <= 2) {
            result = 1;
        } else {
            result = cache[i - 1] + cache[i - 2];
        }
        cache[i] = result;
    }

    return cache[n];
}

for (let n = 1; n <= 10; n++) {
    console.log(fib(n));
}
