const http = require("http");

const PORT = 3000;
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

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Factorial of ${NUMBER} is ${result}`);
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});