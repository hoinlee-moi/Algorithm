// https://school.programmers.co.kr/learn/courses/30/lessons/120889#

function solution(sides) {
    const maxNum = Math.max(...sides)
    const numArr = sides.filter(num => num<maxNum)
    if(numArr.length===0) {
        numArr.push(maxNum)
        numArr.push(maxNum)
    }
    if(numArr.length ===1) {numArr.push(maxNum)}
    const numSum = numArr.reduce((num,val) => num+val,0)
    console.log(maxNum, numArr, numSum)
    return maxNum <numSum? 1:2 
}

/*
일단 너무 복잡하게 생각했는지 하드코딩이 나왓다. 어떻게 하면 더 줄일 수 있을까?? 하는데... 
진짜 완전 멍청하게 하드 코딩을 했다.
그냥 다 합친 값에서 가장 큰 값을 빼면 3값이 같든 어쩌든 최대값을 제외하고 합친 값이 나오는데 어떻게 배열로 처리할까라는
쓸데없는 고민을 하다 실수 한 것 같다...
 */
function solution(sides) {
    const maxNum = Math.max(...sides)
    const numSum = sides.reduce((num,val) => num+val,0)-maxNum
    return maxNum <numSum? 1:2 
}
/*
Math.max를 이용해 가장 큰 수를 구한뒤 reduce로 모든 배열을 합한 값을 구하고 최대값을 빼서 합산을 구함. 이후 삼항연산자로
*/
function solution(sides) {
    sides.sort((a,b)=>a-b);
    return sides[0] + sides[1] > sides[2] ? 1 : 2;
}
/*
sides를 sort로 오름차순 시키면 가장 큰 값이 뒤로 가서 더 쉽게 쓸 수 있다.
*/


// https://school.programmers.co.kr/learn/courses/30/lessons/120848#

function solution(n) {
    let multiply = 1;
    for(let i = 1; i<=n; i++){
        multiply *= i 
        if(multiply>n){
            i--
            return i
        }
    }
    return multiply
}

/*
팩토리얼 문제로 반복문을 이용해 점차 곱셈으로 증가하는 수를 만들었고 그 숫자가 n보다 커질시 이미 곱셈이 넘어간 것이기 때문에 --한 값을 받도록 했다.
이 과정에서 1일 경우엔 if문이 1번 재생되어 if조건식이 걸리지 않고 undefined가 되기 때문에 기본적으론 1을 return하도록 함
*/