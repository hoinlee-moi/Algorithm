function solution(my_string, num1, num2) {
    let strArr = my_string.split("");
    [strArr[num1], strArr[num2]] = [strArr[num2], strArr[num1]];
    return strArr.join("");
}
