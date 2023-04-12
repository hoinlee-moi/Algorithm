// https://school.programmers.co.kr/learn/courses/30/lessons/120883#  로그인성공?

function solution(id_pw, db) {
  const arr = db.map((v) => {
    if (id_pw.includes(v[0])) {
      if (id_pw.includes(v[1])) return "login";
      else return "wrong pw";
    } else return "fail";
  });
  return arr.includes("login") ? "login" : arr.includes("wrong pw") ? "wrong pw" : "fail";
}

/*
처음엔 answer 변수를 선언하고 거기에 넣어주는 방식을 이용했지만 테스트 케이스 하나가 틀렸었다. 생각해보니 마지막에 fail이 나오면
answer은 fail이 뜰테니 차라리 map을 쓰기로 한거 전체 검사한 뒤 login부터 차례대로 찾아 조건을 걸어 리턴값을 주니 해결이 되었다.
*/
function solution(id_pw, db) {
  db = db.filter((v) => v[0] === id_pw[0]);
  if (!db.length) return "fail";
  for (let d of db) if (d[1] === id_pw[1]) return "login";
  return "wrong pw";
}
/*
다른사람 풀이로 filter를 쓸까 했었는데 실제 사용한 풀이가 있었다. id값이 일치한 걸 찾아 배열이 존재 한다면 비번을 찾고 없으면 바로fail식으로 처리했다.
*/

// https://school.programmers.co.kr/learn/courses/30/lessons/120868  삼각형의 완성조건(2)


function solution(sides) {
    const answer = [];
    const maxSide = Math.max(...sides)
    const minSide = Math.min(...sides)
    for(let i=maxSide-minSide+1;i<=maxSide; i++) answer.push(i)
    for(let i=maxSide+1; i<maxSide+minSide; i++) answer.push(i)
    return answer.length;
}

/*
주어진 배열에서 큰 변의 길이와 작은 변의 길이를 구하여 큰 변의 길이가 가장 클 때의 값과 주어지지 않은 값이 가장 큰변의 길이일 때의 조건을 구하여
반복문을 통해 해당하는 숫자들을 집어넣어 도출해냈다.
*/
function solution(sides) {
    return Math.min(...sides)*2-1
}
/*
가장 작은 값의 곱에 -1  값의 규칙이 있거나 삼각형 공식을 이용한 수 같은데 좀 더 찾아봐야겠다.
*/


// https://school.programmers.co.kr/learn/courses/30/lessons/120884#  치킨쿠폰

function solution(chicken) {
    let coupon = 0;
    let service = 0;
    while(chicken>=10) {
            service += Math.floor(chicken/10)
            coupon = chicken%10
            chicken = Math.floor(chicken/10)+coupon
    }
    return service;
}

/*
10마리당 하나의 서비스 치킨이니 치킨을 10으로 나누면 서비스 치킨 수가 나온다. 서비스 치킨수에 남은 쿠폰을 더하면 가진 총 쿠폰 합이 나오는데
거기서 다시 10으로 나눠 서비스 치킨을 구하고 또 거기서 남는 쿠폰을 더하는식으로 계속 반복을 돌려 계산
*/
