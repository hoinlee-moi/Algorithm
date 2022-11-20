function solution(a, b) {
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const day = ["FRI","SAT","SUN","MON","TUE","WED","THU"];;
    for(let i=0; i<a-1; i++) b += month[i] 
    return b%7!=0?day[b%7-1]:"THU";
}

/*
처음에 어떻게 해볼까 하다 그냥 각 월마다의 총 일수를 배열로 두고 계산했다.
Date객체를 쓴 사람도 있는데 현업에서는 사용하겠지만 알고리즘을 연습할 땐 좋은 건 아닌 것 같다.
아무튼 월에 포함된 일수와 주어진 일수(b)를 모두 합한뒤 7로 나눈 나머지 값을 요일로 내보내도록 했는데
-1일 경우 undefined가 나와 -1일 때를 마지막 리턴값에 따로 처리 했다
-1일때는 무조건 THU임으로 THU만 출력된다.
*/