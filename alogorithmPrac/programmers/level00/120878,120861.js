// https://school.programmers.co.kr/learn/courses/30/lessons/120878  유한소수 판별하기

function solution(a, b) {
    const finite = b/greatestDivisor(a,b)
    let answer = []
    for(let i = 2; i<=finite; i++) {
        if(finite%i===0) answer.push(i)
    }
    const finiteTrue = answer.map(v => v%2===0 || v%5===0)
    return finiteTrue.includes(false)? 2:1
}

const greatestDivisor = (num1,num2) => {
    let divisor = 0;
    for(let i =1; i<=Math.min(num1,num2); i++){
        if(num1%i ===0 && num2%i===0) divisor=i
    }
    return divisor
}

/*
뭔가 지금까지 쉽게 코테를 깨다가 갑자기 난이도가 있는게 나오니 어렵기도 하고 어리둥절하기도 한데 일단 두 수의 최대 공약수를 뽑아주는 함수를 하나 만들었다.
이후 기약분수 계산을 위해 분모를 최대공약수로 나눴으며 그 값을 다시 인수분해를 한 뒤 2와 5의 소수만을 가지는 지 배열 값 처리로 도출해 냈다.
2나 5로 나눠지지 않는 인수가 있을 경우 원하는 값을 리턴하도록 만듬
*/
function solution(a, b) {
    let n = 1;
    for (let i = 1; i <= Math.min(a,b); i++) {
        if (a%i===0 && b%i===0) n = i;
    }
    b/=n;
    while (b%2===0) b/=2;
    while (b%5===0) b/=5;
    return b === 1 ? 1 : 2;   
}
/*
이 풀이는 일단 for문으로 찾는 건 나와 같지만 다른점은 함수처리를 했냐 안했냐로 볼 수 있다. 그리고 나는 배열 검사를 통해서 진행하였는데 여긴 단순하게
2와 오를 나눠버려서 그 값으로 검사하는 식으로 진행했다. 꽤 좋은 방법 같다.
*/


// https://school.programmers.co.kr/learn/courses/30/lessons/120861  캐릭터의 좌표


function solution(keyinput, board) {
    board[0] = Math.floor(board[0]/2)
    board[1] = Math.floor(board[1]/2)
    let result = [0,0]
    for(let i = 0; i<keyinput.length; i++) {
        if(Math.abs(result[0])<board[0]){
          if(keyinput[i] === "left") result[0]-=1
          else if(keyinput[i] === "right") result[0]+=1
        }
        if(Math.abs(result[1])<board[1]){
            if(keyinput[i] === "up") result[1]+=1
            else if(keyinput[i] === "down") result[1]-=1
        }
    }
    return result
}
/*
for문으로 좌표를 어디로 이동하는지 확인한 뒤 움직이도록 했는데 절대값을 이용하니 자꾸 실패케이스가 떠서 아래의 각각 비교하는 걸로 바꿨더니 해결됐다.
switch case문을 사용해도 훨씬 좋았을 것 같다.
*/
function solution(keyinput, board) {
    board[0] = Math.floor(board[0]/2)
    board[1] = Math.floor(board[1]/2)
    let result = [0,0]
    for(let i = 0; i<keyinput.length; i++) {
          if(keyinput[i] === "left") {
             if(-result[0]<Math.floor(board[0])) result[0]--
          }
          if(keyinput[i] === "right") {
             if(result[0]<Math.floor(board[0])) result[0]++
          }
          if(keyinput[i] === "up"){
            if(result[1]<Math.floor(board[1])) result[1]++
            } 
          if(keyinput[i] === "down") {
            if(-result[1]<Math.floor(board[1])) result[1]--
            } 
    }  
    return result
}