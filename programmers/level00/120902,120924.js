// https://school.programmers.co.kr/learn/courses/30/lessons/120902  문자열 계산하기

function solution(my_string) {
    const arr = my_string.split(/[" "]/g)
    const answer = arr.reduce((acc,cur,i) => {
        if(cur === "+"||cur === "-") return acc
        if(arr[i-1] ==="+") return Number(acc)+Number(cur)
        if(arr[i-1] ==="-") return Number(acc)-Number(cur)
    });
    return answer;
}

/*
주어진 제한조건에 연산자와 숫자 사이엔 공백이 있다고 하여 split을 통해 문자열 전체를 공백을 통해 배열화 시킨 후
배열 함수인 reduce를 사용, 인덱스 값과 if조건문을 통해 연산자가 나올경우 그대로 통과 숫자가 나올경우 앞 연산자가 무엇이냐에 따라
계산식이 바뀌도록 하여 값을 도출해냄
*/

function solution(my_string) {
    return eval(my_string);
}
/*
eval함수라는 문자열을 그냥 실행시켜주는 함수가 있고 그걸 이용하면 매우 손쉽게 풀 수 있지만 절대 사용하지 말라는 경고가 있기도 하다.
 */


// https://school.programmers.co.kr/learn/courses/30/lessons/120924  다음에 올 숫자


function solution(common) {
    var answer = 0;
    for(let i = 0; i<common.length; i++) {
        if(common[i+1]-common[i]===common[i+2]-common[i+1]) {
            return answer = common[common.length-1]+(common[i+1]-common[i])
        }
        else return answer = common[common.length-1]*(common[i+1]/common[i])
    }
    return answer;
}


/*
등차와 등비를 구분하기 위해 0번째와 1번째의 차, 2번째와 1번째의 차를 비교하여 같다면 등차 아니면 등비로 결정한다.
이후 등차는 그 차의 값을 마지막 값에 더하는 걸 바로 리턴하도록 했고 등비는 몫을 곱하는 걸 리턴하도록 하였다.
근데 생각해보면 굳이? for문을 돌 필요는 없어 보인다.
*/

function solution(common) {
    let answer = 0;
        if(common[1]-common[0]===common[2]-common[1]) {
            return answer = common[common.length-1]+(common[1]-common[0])
        }
        else return answer = common[common.length-1]*(common[1]/common[0])
}

/*
애초에 그냥 조건식을 이용하는 건데 갑자기 for문을 돌린 건 큰 패착이라고 생각한다. 배열이라고 무조건 for를 생각하는 고정관념을 버릴 수 있도록하자
*/
