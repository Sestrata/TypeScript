function sumOfNums(num1: string, num2: string) {
    let first = parseInt(num1);
    let second = parseInt(num2);
    let result = 0;
    for (let i = first; i <= second; i++) {
        result += i;
    }
    console.log(result);

}
sumOfNums('-8', '20')
