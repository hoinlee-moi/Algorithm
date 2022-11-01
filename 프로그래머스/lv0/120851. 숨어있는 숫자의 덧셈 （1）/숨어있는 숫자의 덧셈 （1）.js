function solution(my_string) {
    let number = my_string.replace(/[^0-9]/g, "");
    return number.split('').reduce((acc,v) => Number(acc)+Number(v))
}