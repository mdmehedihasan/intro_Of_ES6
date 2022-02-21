const mul = (n1, n2, n3) => n1 * n2 * n3;
const final = mul(1, 2, 3);
console.log(final);

//five times
const fiveTimes = n => n * 5;
const finals = fiveTimes(5);
console.log(finals);

//get name
const getName = () => 'Brandon Smai';
const name = getName();
console.log(name);

//do math by arrow function

const doMath = (n1, n2) => {
    const sum = n1 + n2;
    const mul = n1 * n2;
    const result = sum + mul;
    return result;
}
const finalRes = doMath(2, 3);
console.log(finalRes);