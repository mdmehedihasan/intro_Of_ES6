function add(num1, num2 = 0) {
    // 
    const total = num1 + num2;
    return total;
}
const result = add(3, 2);
console.log(result);

function full_name(fistname, second = ' chowdhuri') {
    const result = fistname + second;
    return result;

}

const first = 'mehedi';
const res = full_name(first);
console.log(res);