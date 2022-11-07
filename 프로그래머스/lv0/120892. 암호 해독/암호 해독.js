function solution(cipher, code) {
    let answer = [];
    let i = 1;
    while(true) {
        let count = code*i-1
        answer.push(cipher[count])
        i++
        if(count>cipher.length) break;;
    }
    return answer.join('');
}