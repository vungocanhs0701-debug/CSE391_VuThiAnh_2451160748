// =============================
// 1. pipe() — Nối chuỗi functions
// =============================

function pipe(...fns) {
    return function (input) {
        let result = input;

        for (let i = 0; i < fns.length; i++) {
            result = fns[i](result);
        }

        return result;
    };
}

const process = pipe(
    x => x * 2,
    x => x + 10,
    x => x.toString(),
    x => "Kết quả: " + x
);

console.log("=== PIPE ===");
console.log(process(5));


// =============================
// 2. memoize() — Cache kết quả
// =============================

function memoize(fn) {
    const cache = {};

    return function (arg) {
        if (cache[arg] !== undefined) {
            return cache[arg];
        }

        const result = fn(arg);
        cache[arg] = result;

        return result;
    };
}

const expensiveCalc = memoize((n) => {
    console.log("Đang tính...");

    let result = 0;

    for (let i = 0; i < n; i++) {
        result += i;
    }

    return result;
});

console.log("\n=== MEMOIZE ===");
console.log(expensiveCalc(1000000));
console.log(expensiveCalc(1000000));


// =============================
// 3. debounce() — Chờ user ngừng gọi mới chạy
// =============================

function debounce(fn, delay) {
    let timerId;

    return function (...args) {
        clearTimeout(timerId);

        timerId = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

const search = debounce((query) => {
    console.log("Searching:", query);
}, 500);

console.log("\n=== DEBOUNCE ===");
search("i");
search("ip");
search("iph");
search("iphone");


// =============================
// 4. retry() — Thử lại nếu lỗi
// =============================

async function retry(fn, maxAttempts = 3) {
    let lastError;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            return await fn();
        } catch (error) {
            lastError = error;
            console.log("Lỗi lần " + attempt + ": " + error.message);
        }
    }

    throw lastError;
}

// Test retry
let count = 0;

async function unstableTask() {
    count++;

    if (count < 3) {
        throw new Error("Task thất bại");
    }

    return "Task thành công ở lần " + count;
}

console.log("\n=== RETRY ===");

retry(unstableTask, 3)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log("Thất bại cuối cùng:", error.message);
    });