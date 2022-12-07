function solution(babbling) {
    let answer = 0;
    const babble = ["aya", "ye", "woo", "ma"]
    babbling.forEach(v=>{
        for(let i=0;i<=babble.length-1;i++){
            let regExp = new RegExp(`(${babble[i]}){2}`)
            if(!v.includes(babble[i])) continue;
            if(v.match(regExp)!==null) break;
            else{
                v=v.replaceAll(babble[i],"0")
                if(Number(v)===0) {
                    answer++
                    break;
                }
            }
        }
    })
    return answer
}

/*
- 옹알이 개수를 카운트 할 변수 하나(`answer`)를 할당하고 주어진 옹알이를 `babble`에 배열로 만든다.
- 주어진 `babbling`을 `forEach`로 돌아 각 단어들을 요소로 가져온다.
- `for`문을 이용하여 `babble`에서 단어를 하나씩 가져와 말을 할 수 있는 단어인지 판단한다.
- 먼저 정규식을 사용하기 위해 `RegExp`객체를 이용하여 `babble`에서 가져온 단어를 정규식 변수로 만든다.
- 이때 연속될 경우 발음할 수 없는 단어이기 때문에 `{2}`를 정규식 안에 ```` 백틱을 이용해 포함시켜 정규식 변수로 만들어야 한다.
- `if`조건문을 통해 가져온 `babble`의 단어가 없다면 바로 다음 단어를 찾아볼 수 있게 `continue`를 입력했다.
- 똑같이 `if`조건문으로 `match`를 활용해 아까 만들어둔 정규식 변수를 이용해 반복되어 붙여져 있는지 확인한다. 이때 `match`는 단어가 반복해서 있을 경우 값을 주고 없을 경우 `null`을 주기에 `null`이 아니면 반복된 단어가 있는 것이기 때문에 이 단어는 옹알이 할 수 없는 단어라 판단 `break`시킨다.
- 모든 조건을 통과 했다면 `replaceAll`을 통해 `babble`단어를 문자열`0`으로 바꾸어주고 `v`에 재할당한다.
- 이때 문자열`0`으로 바꾼 이유는 `replaceAll`을 통해 ""빈칸으로 삭제시키면 제거된 값들이 붙어 연속된 단어로 변할 수 있기 때문에 구별을 위해 `0`을 문자열로 집어 넣었다
- 그리고 문자열 `0`은 아무리 0이 많이 붙어 있어도(`"00000000"`) 숫자로 바꾸면 `0`으로 변하기에 이 값이 더이상 단어 판별이 필요한지를 확인할 수 있게된다.
- 고로 숫자로 바꾼 `v`의 값이 숫자`0`이라면 멈추도록 하고 `answer`에 `++`를 시키고 `break`하도록 했다

나도 같은 정규식을 썼지만 훨씬 더 잘 쓴 정규식 해법이 있어 아래에 붙인다.
정규식과 reduce의 결합으로 잘 만든 식인 것 같다.

function solution(babbling) {
  const regexp1 = /(aya|ye|woo|ma)\1+/;
  const regexp2 = /^(aya|ye|woo|ma)+$/;

  return babbling.reduce((ans, word) => (
    !regexp1.test(word) && regexp2.test(word) ? ++ans : ans
  ), 0);
}
*/