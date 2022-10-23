//https://school.programmers.co.kr/learn/courses/30/lessons/120892  암호해독

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

/*
while 반복을 통해 문자열중 암호에 해당하는 문자를 계속 추출하여 배열에 담아 해결하였습니다. 하드 코딩이기 때문에 다른 풀이를 알아보았다.
*/

function solution(cipher, code) {
    return cipher.split('').filter((v,i)=>(i+1)%code===0).join('');
}

/*
생각해보니 filter라는 함수가 있었다. 항상 value값만 이용해 계산하다보니 index를 생각하지 못했다. 
*/


// https://school.programmers.co.kr/learn/courses/30/lessons/120834  외계행성의 나이

function solution(age) {
    let answer = [];
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    age = String(age).split('')
    for(let i =0; i<age.length; i++) {
        answer.push(alphabet[age[i]])
    }
    return answer.join('');
}

/*
또 하드코딩한 기분이 없잖아 있다. 알파벳 배열을 만들어 놓고 age배열로 만들거나 string으로 만들어서 숫자를 더해주면 될 것 같다. 나는 배열로 처리했지만 string으로만 변환시켜 이용해도 괜찮을 것 같다.
*/

function solution(age) {
    let char = 'abcdefghij'
    return Array.from(age.toString()).map(t => char[+t]).join('');
}
/*
문제 속에 9까지만 나와있어서 j까지만이라 생각했어야 했는데 너무 안일했다. 이 풀이 방식은 age를 배열로 변경해서 그 배열에 있는 숫자값을 문자열에서 뽑아내는 걸로 완성했다.
*/


// https://school.programmers.co.kr/learn/courses/30/lessons/120845  주사위의 개수

function solution(box, n) {
    return box.map(v=>parseInt(v/n)).reduce((a,v) => a*v);
}

/*
생각보다 쉽게 끝났는데 박스 안에 주사위를 몇개 집어 넣는 것이기에 길이 나눗셈을 시켜 해결하였다.
*/
