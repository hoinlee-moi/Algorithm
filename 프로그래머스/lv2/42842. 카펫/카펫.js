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
많이 특이한 방법으로 푼 것 같다.
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