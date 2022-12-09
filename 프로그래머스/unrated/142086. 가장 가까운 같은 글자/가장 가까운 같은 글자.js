function solution(s) {
    const map = new Map();
    let answer = [];
    for(let i=0; i<=s.length-1; i++){
        if(map.get(s[i])>=0){
            answer.push(i-map.get(s[i]))
        }else{
            answer.push(-1)
        }
        map.set(s[i],i)
    }
    return answer;
}

/*
- 먼저 오브젝트 객체를 만들 수 있는 `Map`을 생성한다.
- 정답을 담을 배열 `answer`를 선언하고 주어진 문자열 `s`를 반복문 `for`를 이용해 돌린다.
- 반복문을 돌 때마다 `map`안에 문자와 인덱스랄 `key`,`value`로 넣는다.
- 이때 `map`안에 저장해둔 문자(객체)가 있다면 `answer`안에 인덱스(`i`)에서 객체의 `value`를 뺀 값을 넣는다
- 그 이전에 해당 문자가 등장했을 때 인덱스 값을 저장해 두었기 때문에 또 문자가 등장했을 때의 인덱스 값에서 이전 등장 인덱스 값을 빼면 몇칸 앞에 있는지 나오기 때문
*/