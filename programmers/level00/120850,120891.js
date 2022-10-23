//https://school.programmers.co.kr/learn/courses/30/lessons/120850  문자열 정렬하기(1)

function solution(my_string) {
    let myNumber = my_string.replace(/[^0-9]/g,'');
    return myNumber.split('').map(v => Number(v)).sort((a,b) => a-b);
}

/*
replace를 이용해서 숫자만 골라낸 뒤에 split으로 배열 변경 뒤 map을 이용해 숫자로 변환, 혹시 string으로 sort를 쓸 경우 문제가 생길걸 대비하여
먼저 number로 반환 후 sort함수를 이용했다.
*/


//https://school.programmers.co.kr/learn/courses/30/lessons/120891  369게임

function solution(order) {
    let answer = 0;
    for(let i = 0 ; i<String(order).length; i++) {
        if(String(order)[i] ==='3' || String(order)[i] ==='6' || String(order)[i] ==='9') answer++
    }
    return answer;
}

/*
배열을 만든 후 map을 이용해 Number로 반환 이후 for문과 if문을 이용해보려고 하다가 매번 배열로만 처리하는 느낌이라 이번엔 string을 이용해 해결해 봄
string으로 변환할 경우 length와 []를 이용한 순서를 잡을 수 있기 때문에 이용할 수 있는 게 많다.
혹시 들어오는 숫자 order중 소수등이 있었으면 방법을 달리 했을 것 같다.
*/
function solution(order) {
    return (''+order).split(/[369]/).length-1;
}
function solution(order) {
    var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
    return answer;
}

/*
다른 풀이 확인 중 두가지가 신기했는데 split을 사용한 것과 matchAll을 사용한 것이다.
split을 이용했을 때 한자리면 빈 배열 2개를 반환 했는데 split의 원리가 기준으로 자르는 것이기 때문에 3하나 있을 때 3을 자르면 이등분돼서 양 옆의 빈 배열이 생성되는 게 아닌가 싶다.
그렇게 될 경우 배열이 나눠지면서 찾은 369 개수보다 배열길이가 1 높아짐으로 -1을 해줘서 해결한다.
matchAll의 경우 string객체 함수로 식에 맞는 모든 문자열을 배열로 내보내 준다. 23456 에서 string 변환 후 matchAll을 쓰면 ["3"]과 ["6"]을 인수로 가지는 배열을 반환하므로
length를 구하면 개수가 도출 된다.
*/