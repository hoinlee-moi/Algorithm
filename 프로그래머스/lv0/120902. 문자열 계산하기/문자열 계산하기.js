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