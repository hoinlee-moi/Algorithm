function solution(s){
    if(s[0]===")"||s[s.length-1]==="("||s.length===1) return false
    let braket = [];
    for(let i=0; i<=s.length-1;i++ ){
        braket.push(s[i])
        if(braket[braket.length-2]+braket[braket.length-1]==="()"){
            braket.pop()
            braket.pop()
        }
    }
    return braket.length===0?true:false
}

/*
먼저 내 코드는 효율성 테스트를 통과해서 정답으로 나오긴 했지만 여러번 시도할 경우 때에 따라 실패가 뜨기도 한다.
안정성이 낮고 코드 또한 비효율이라고 볼 수 있다.

- `s`의 처음이나 끝이 `)`시작하거나 `(`로 끝나고 `s`의 길이가 1이면 `false`를 `return`하도록 정해놨다.
- 이후 `braket`이라는 배열을 만들고 `s`를 `for`문을 이용해 각 글자들을 `braket`이란 배열에 넣었다.
- 그리고 반복을 돌 때마다 `braket`의 끝부분을 확인하여 `()`가 완성된다면 제거하는 식으로 처리하였다.

하지만 비효율적인 게 있었고 아래 식을 따라하니 엄청 빠르게 통과 되었고 효율성 테스트도 매우 좋았다.

function solution(s) {
if(s.length === 1 || s[0] === ")") return false;

let p = 0;

for(let i = 0 ; i < s.length ; i++) {
    if(s[i] === "(") {
      p++;
    } else {
     if(p < 1) return false;
    p--;
}
return p > 0 ? false : true;
}

- 맨처음 식은 나와 똑같이 곧바로 실패를 알 수 있게 `if`문을 걸어놓았다.
- `for`문을 이용해 반복을 올리는데 괄호의 시작은 `(`부터이니 `if`를 이용해 `(`일 때 변수 `p`를 증가시키고
아닐 때는 `p`를 감소시키도록 하였다.(`(`가 아니라면 `)`이니 `)`일 때 감소)
- 감소시킬 때 `p`가 1보다 작다면 `false`를 return하도록 했는데 이는 `p`가 0일때는 괄호의 시작인데 괄호의 시작은 `(`이기 때문에 `else`를 통해 왔다는 건 `)`로 괄호가 시작했다는 뜻으로 짝지어지지 않는다는 뜻이다. 
*/
