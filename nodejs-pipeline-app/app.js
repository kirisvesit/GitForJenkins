const NUMBER = 5;

function factorial(n) {
    if (n === 0 || n === 1) return 1;

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

const result = factorial(NUMBER);

console.log("Node.js Application Deployment Successful");
console.log(`Factorial of ${NUMBER} is ${result}`);
