function solution(brown, yellow) {
    let area = measure(brown+yellow);
    let wh = [];
    for(let i=0; i<=area.length-1;i++){
        wh.push(area[i])
        if(wh.length===2){
            if((wh[0]-2)*(wh[1]-2)===yellow) break;
            else {
                wh.pop()
                wh.pop()
            }
        } 
    }
    if(wh.length===1) return [wh[0],wh[0]]
    return [wh[1],wh[0]];
}

const measure = num => {
    const divisors = [];
    for(let i = 1 ; i <= Math.sqrt(num) ; i++){
        if(num % i === 0) {
            divisors.push(i);
            if(num / i != i) divisors.push(num / i);
        }
    }
    return divisors;
}

/*
많이 특이한 방법으로 푼 것 같다. 넓이를 알고 있을 때 가로와 세로의 길이는 약수가 된다는 것을 이용하여 나올 수 있는 가로세로 경우의 수를 구하는 방식으로 했다.

- 먼저 약수(가로,세로)를 구하는 함수 `measure`를 구성한다.
- `i`가 1부터 쭉 늘어나며 약수를 구할 수의 제곱근까지만 계산하며 넣는 방식을 이용하면 각각 짝지어지는 약수 순으로 배열이 구성된다.
- 그럴 경우 정확히 2개의 약수끼리 가로세로가 구성이 된다.
- 가로세로가 담길 변수 `wh`를 선언하고 반복문을 통해 `wh`에 가로세로순으로 담은 뒤 `length`검사로 가로세로가 담기면 노란색 타일의 넓이와 같은지 확인한다.
- 노란색 타일의 넓이는 외부 갈색 타일을 제외한 전체이기 때문에 왼쪽 오른쪽 갈색타일 1씩 해서 2를 가로에서 빼고 마찬가치로 위 아래 갈색타일 1씩 해서 2를 세로에서 빼 곱하면 노란색 타일 넓이가 나온다.
- 이를 이용해 전체 가로세로 길이가 `wh`에 담겨있으니 각 길이의 2를 뺀 값을 곱한 값이 주어진 노란색 타일 범위의 값(`yellow`)과 같은지 확인한다.
- 맞다면 그대로 반복문을 멈추고 return하면 된다.
- 다만 약수가 홀수개로 가로세로 길이가 같은 때가 있는데 이 경우 반복문을 전부 돌고서도 마지막까지 값이 구해지지 않으므로
마짐가에 `wh`의 길이가 1인 경우를 체크하여 검사하면 된다.

function solution(brown, red) {
    var answer = [];
    for (var i = 3; i <= (brown+red)/i; i++) {
        var x = Math.floor((brown+red)/i);
        if( (x-2)*(i-2)=== red) {
            break;
        }
    }

    return [x,i];
}

*/