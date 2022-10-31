function solution(num, total) {
    let answer = [];
    if(num%2 ===0) {
        const first = Math.floor((total/2)/(num/2))-(num/2-1)
        const last = Math.ceil((total/2)/(num/2))+(num/2-1)
        for(let i=first; i<=last; i++ ) answer.push(i)
    } else{
        const first = (total/num)-((num-1)/2)
        const last = total/num+((num-1)/2)
        for(let i=first; i<=last; i++ ) answer.push(i)
    }
    return answer;
}

/*
수학 공식을 이용했는데 연속된 숫자의 개수가 짝수면 total을 2 나눈 값이 총 숫자의 개수/2 만큼 등장해야 total이 나온다. 이를 이용해 for문으로 숫자를 삽입
홀수라면 연속된 숫자의 개수로 total을 나눈 값이 연속된 숫자의 가운데 값이 되고 이를 이용해 (연속된 숫자개수-1)/2 값이 양쪽으로 연속될 숫자의 개수이다. 이를 이용해 for문으로 삽입
*/

function solution(num, total) {
    var min = Math.ceil(total/num - Math.floor(num/2));
    var max = Math.floor(total/num + Math.floor(num/2));

    return new Array(max-min+1).fill(0).map((el,i)=>{return i+min;});
}

/*
다른 사람 풀이 -  연속될 숫자의 최소와 최대를 구한 후 배열의 길이를 설정한 뒤 fill로 채우고 map을 이용해 숫자를 입력한다.
*/
