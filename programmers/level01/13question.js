// https://school.programmers.co.kr/learn/courses/30/lessons/120889\

const sides = [199,72,222]
console.log(Math.max(...sides))


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