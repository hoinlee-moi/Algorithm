//https://school.programmers.co.kr/learn/courses/30/lessons/120892

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


// https://school.programmers.co.kr/learn/courses/30/lessons/120834

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


// https://school.programmers.co.kr/learn/courses/30/lessons/120845

function solution(box, n) {
    return box.map(v=>parseInt(v/n)).reduce((a,v) => a*v);
}

/*
생각보다 쉽게 끝났는데 박스 안에 주사위를 몇개 집어 넣는 것이기에 길이 나눗셈을 시켜 해결하였다.
*/


//https://school.programmers.co.kr/learn/courses/30/lessons/120815

function solution(n) {
    let count = 1;
    let pizza = 0
    while(true){
        if((n*count) %6 ===0) {
            pizza = (n*count)/6
            break;
        }
        else count++
    }
    return pizza;
}

/*
반복되는 조건을 사용할 땐 자꾸 while문을 사용하게 된다. 물론 이게 틀린 건 아니지만 하드코딩하는 느낌은 지울수가 없다. 그리고 if else문은 삼항연산자를 이용해 짧게 처리할 수 도 있지만 break문과 가독성을 위해
if문을 사용했다.
숫자 계산식에서 차라리 pizza를 6조각이니 6으로 만들어서 진행했어도 좋았을 것 같다.
*/

function solution(n) {
    let pizza = 6
    while(true){
        if(pizza%n === 0) {
            pizza /= 6
            break;
        }
        else pizza +=6
    }
    return pizza;
}
//이렇게 조금 더 줄일 수 있을 것 같다.



// https://school.programmers.co.kr/learn/courses/30/lessons/120862

function solution(numbers) {
    numbers.sort((a,b) => b-a)
    let answer = numbers.map((v,index) => v*numbers[index+1])
    answer.sort((a,b) => b-a)
    return answer[0]
}

/*
먼저 numbers를 내림차순으로 정렬시킬 경우 양수에서 제일큰 2수는 앞에 2자리 음수에서 가장 큰수 2개는 끝에서 2자리를 가지게된다.
이 배열에서 map을 이용해 각 배열의 순서쌍의 곱을 구한 다음 다시 내림차순 시켜 0번째 값을 도출해 내면 된다.
Math.max를 이용해 도출하려 했으나 null값이 있어서 sort를 이용했는데 조금 더 생각해보면 다르게 가능했다
*/

function solution(numbers) {
    numbers.sort((a, b) => a - b);
    return Math.max(numbers[0]*numbers[1], numbers[numbers.length-1]*numbers[numbers.length-2]);
}
//그냥 앞서 말한 앞에 양의 큰수 뒤에 음에 큰수면 그 두수를 비교해서 큰 값을 max로 구하면 된 던 것이다!


// https://school.programmers.co.kr/learn/courses/30/lessons/120888

function solution(my_string) {
    const strArr = my_string.split("");
    const set = new Set(strArr)
    const answer = [...set]
    return answer.join("");
}

/*
set이라는 중복제거 자료구조를 이용하였는데 처음 써보다 보니 너무 많은 걸 작성했는데 아래와 같이 간단하게 처리할 수 있다.
*/

function solution(my_string) {
    return [...new Set(my_string)].join('');
}
//마지막 join의 경우 Set 결국 배열을 반환하기 때문에 