//https://school.programmers.co.kr/learn/courses/30/lessons/120886  A로 B 만들기

function solution(before, after) {
    let beforeArr = before.split('').sort()
    let afterArr = after.split('').sort()
    for(let i = 0; i<afterArr.length; i++){
        if(beforeArr[i] != afterArr[i]) return 0
        }
    return 1
}

/*
둘이 섞여 있어도 같은 길이의 문자들이라면 정렬했을 때 같을 게 분명하기 때문에 배열로 만들어 정렬 시킨 후 비교하였다.
비교값을 배열함수로 처리해도 됐을 것 같다.
 */
function solution(before, after) {
    return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
}
/*
방법은 같은데 좀더 쉽게 코딩 된 상태,
*/



//https://school.programmers.co.kr/learn/courses/30/lessons/120842  2차원으로 만들기

function solution(num_list, n) {
    let answer = []
    let start = 0
    let End = n
    while(true) {
        let arr = num_list.slice(start,End)
        answer.push(arr)
        start +=n
        End+=n
        if(End>num_list.length) break;
    }
    return answer
}

/*
하드코딩 했다. 주먹구구식으로 하긴 했지만 좀 더 좋은 방법이 있을 것 같다. slice로 잘라내서 그냥 집어 넣는 식으로 했는데..
다른 사람걸 확인하니 비슷하긴했다 while이나 for나 같은 반복문이니
*/
function solution(num_list, n) {
    var answer = [];
    for (let i = 0; i < num_list.length; i += n) {
      answer.push(num_list.slice(i, i + n));
    }
  
    return answer;
  }

  function solution(num_list, n) {
    var answer = [];

    while(num_list.length) {
        answer.push(num_list.splice(0,n));
    }

    return answer;
}
//아래는 좀더 while문 조건을 쉽게 처리했다.
function solution(num_list, n) {
    return Array(num_list.length / n).fill([]).map(() => num_list.splice(0, n))
}
