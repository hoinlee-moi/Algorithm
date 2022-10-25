// https://school.programmers.co.kr/learn/courses/30/lessons/120853  컨트롤제트

function solution(s) {
    s = s.split(' ');
    let arr = [];
    for (let v of s) v === 'Z' ? arr.length ? arr.pop() : '' : arr.push(v);
    return arr.reduce((a,v)=>a+ +v,0);
}

/*
나는 reduce를 이용해서 풀었는데 또 한 두 케이스가 실패가 나서 도대체 왜 이러지 해서 다른 방식으로 풀었는데
위에 푼 방법은 다른 사람이 푼 방법이다. 근데 웃긴게 내가 조건대로 만든 케이스에선 실패하는데 채점에는 통과된다는 거다.. 왜그런지 모르겠지만 아무튼
새 배열에 Z가 아닐 때 집어넣고 Z면 마지막에 들어간 값을 빼는 건데 Z가 연속되면 2번 값을 빼버리는데 이게 맞는 건가 싶다.
*/


//  https://school.programmers.co.kr/learn/courses/30/lessons/120880  특이한 정렬

function solution(numlist, n) {
    return numlist.sort((a, b) => {
      const [aDiff, bDiff] = [Math.abs(a - n), Math.abs(b - n)];
      if (aDiff === bDiff) return b - a;
      return aDiff - bDiff;
    });
  }

/*
numlist 값을 sort로 정렬 시키는데 a,b는 각각 1번째와 2번째 요소를 준다. 그 때 n에서의 첫번째 요소와 2번째 요소의 차이 값을 구하고 절대값을 비교하여
오름차순 시킨다. 다만 둘이 같다면 더 큰수가 앞쪽에 올 수 있도록 그 때만 내림차순 시킨다.
 */


function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}

/*
더 간단히 한 풀이를 발견했다. || 연산자를 이용하는데 a,b 차이가 같다면 0이 되니 false가 반환되어 뒤에 있는 b-a가 실행된다.
*/
