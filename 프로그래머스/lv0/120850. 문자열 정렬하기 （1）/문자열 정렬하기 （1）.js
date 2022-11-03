function solution(my_string) {
    let myNumber = my_string.replace(/[^0-9]/g,'');
    return myNumber.split('').map(v => Number(v)).sort((a,b) => a-b);
}