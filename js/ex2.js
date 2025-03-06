const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("Odd numbers:", oddNumbers);

const divisibleBy2Or5 = numbers.filter(num => num % 2 === 0 || num % 5 === 0);
console.log("Numbers divisible by 2 or 5:", divisibleBy2Or5);

const squaredDivisibleBy3 = numbers
    .filter(num => num % 3 === 0)
    .map(num => num ** 2);
console.log("Numbers divisible by 3 squared:", squaredDivisibleBy3);

const sumOfSquaresDivisibleBy5 = numbers
    .filter(num => num % 5 === 0)
    .map(num => num ** 2)
    .reduce((sum, num) => sum + num, 0);
console.log("Sum of squares of numbers divisible by 5:", sumOfSquaresDivisibleBy5);

document.addEventListener("DOMContentLoaded", () => {
    const outputDiv = document.getElementById("output");

    const results = [
        {label: "Odd numbers", value: oddNumbers},
        {label: "Numbers divisible by 2 or 5", value: divisibleBy2Or5},
        {label: "Numbers divisible by 3 squared", value: squaredDivisibleBy3},
        {label: "Sum of squares of numbers divisible by 5", value: sumOfSquaresDivisibleBy5}
    ];

    results.forEach(result => {
        let p = document.createElement("p");
        p.classList.add("result");
        p.textContent = `${result.label}: ${Array.isArray(result.value) ? result.value.join(", ") : result.value}`;
        outputDiv.appendChild(p);
    });
});
