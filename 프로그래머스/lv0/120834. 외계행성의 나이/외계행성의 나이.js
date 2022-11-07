function solution(age) {
    let answer = [];
    let alphabet = ['a','b','c','d','e','f','g','h','i','j']
    age = String(age).split('')
    for(let i =0; i<age.length; i++) {
        answer.push(alphabet[age[i]])
    }
    return answer.join('');
}