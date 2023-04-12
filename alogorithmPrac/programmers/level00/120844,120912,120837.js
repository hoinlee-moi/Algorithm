// https://school.programmers.co.kr/learn/courses/30/lessons/120844  배열 회전시키기

function solution(numbers, direction) {
    if(direction === 'right') {
        numbers.unshift(numbers.pop())
    } else{
        numbers.push(numbers.shift())
    }
    return numbers
}
/*
배열 이동 함수이 shift와 unshift를 사용하면 되는데 shift를 이용시 0번째를 제거하고 왼쪽 unshift시 오른쪽으로 이동하고 0번째가 비게 되는데
unshift 안에 요소를 넣을경우 오른쪽으로 밀며 0번째에 요소를 넣게 된다. 따라서 pop으로 제거 하며 마지막 요소를 구한 뒤
unshift로 오른쪽으로 옮김과 동시에 pop으로 제거 pop으로 제거한 요소를 0번째에 넣는다.
shift는 한수를 왼쪽으로 밀며 제거한 요소를 구할 수 있는데 shift를 이용해 왼쪽으로 밀며 구한 값을 push로 집어 넣는다.
*/

// https://school.programmers.co.kr/learn/courses/30/lessons/120912  7의 개수


function solution(array) {
    let arrayNum = String(array.join(''))
    let answer = [...arrayNum.matchAll(/[7]/g)]
    return answer.length;
}

/*
맨 처음에는 join을 시켰다가 다시 split으로 전부 한자리 수의 배열로 만들어서 7이 발견 될 때마다 count 수를 늘리는 방식으로 하드코딩 하려 했으나
같은 방법이면 string화 시켜 진행해도 괜찮다고 생각하여 해보니 matchAll이란 아까전 알고리즘 풀 때 봤던 함수를 이용해 해결하였다.
*/
function solution(array) {
    return array.join('').split('7').length-1;
}
/*
더 간단한 방법이 있었는데 split의 원리에 대해 알고 있었으면 됐다. 7을 기준으로 양 옆으로 가른다. 그럼 7878 일 경우 7이 총 2개이고 3개의 배열의 반환 될 텐데 거기서 -1 시키면 해결됐었다.
*/


// https://school.programmers.co.kr/learn/courses/30/lessons/120837  개미군단

function solution(hp) {
    let answer = 0;
    if(hp%5===0) {
        return answer += parseInt(hp/5)
    }
    else {
        answer += parseInt(hp/5)
        hp%=5
    }
    if(hp%3===0) {
        return answer += (hp/3)
    } else{
        answer += parseInt(hp/3)
        hp%=3
    }
    if(hp%1===0) {
        return answer += parseInt(hp/1)
    }
    return answer;
}

/*
탐욕법을 이용해 풀었는데 더 좋은 방법이 있을 것 같다. 가장 큰 값부터 빼서 점점 작은 값에 도달하는 건데 
*/
function solution(hp) {
    return parseInt(hp/5) + parseInt((hp%5)/3) + parseInt((hp%5)%3)
}
/*
이렇게 풀었어도 됐을 거 같다. 물론 조건식이 없는 것에 조금 제한 사항들이 사라지겠지만 탐욕법을 이용한다는 것은 동일하다.
0이 되면 어차피 계산 값으론 0이 도출되기 때문
하나 생각지 못한 계산 법이 있었는데
*/
function solution(hp) {
    let ant = [5,3,1];
    let ans = [];

    for (let v of ant) {
        ans.push(~~(hp/v));
        hp%=v;
    }

    return ans.reduce((a,v)=>a+v,0);
}

/*
이 식으로 개미를 배열에 넣은 다음 for of문을 통해 ant종류만큼 hp를 한번씩 나누고 나눌 때마다 hp는 나머지로 바꾼다.
이후 hp를 개미 종류마다 나눈 값의 배열을 다 합해버리면 된다.
*/