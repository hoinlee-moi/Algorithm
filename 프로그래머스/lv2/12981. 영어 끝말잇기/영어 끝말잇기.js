function solution(n, words) {
    let answer = [0,0]
    let word = [words[0]];
    for(let i=1; i<=words.length-1; i++){
        let lastWord = word[word.length-1]
        if(word.includes(words[i])||lastWord[lastWord.length-1]!==words[i][0]){
            answer[0] += (i%n)+1
            answer[1] += Math.floor(i/n)+1
            break;
        }
        word.push(words[i])
    }

    return answer;
}

/*
생각이 풀어지는 대로 계산했다.
- 먼저 정답을 담을 `answer`를 변수로 설정하고 첫번째부터 걸리진 않으니 `word`란 배열에 미리 첫번째 단어를 넣는다
- `word`란 배열은 중복되어 말한 사람이 있는지 판별하기 위한 배열
- 반복문을 `index`1번부터 돌며 마지막 단어의 끝부분과 다음 단어의 첫 부분이 일치하는지와 중복되지 않았는지 검사하고
- 중복되었다면 순서와 차례를 계산하여 `answer`배열에 넣은 후 바로 `break`를 걸어 게임을 끝낸다.
- 정상적이라면 `word`에 계속 단어를 추가하며 끝말잇기 게임을 이어나간다.

아래는 더욱 짧고 다른 코드를 이용해서 풀었는데

function solution(n, words) {
    let answer = 0;
    words.reduce((prev, now, idx) => {
        answer = answer || ((words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]) ? idx : answer);
        return now[now.length-1];
    }, "")

    return answer ? [answer%n+1, Math.floor(answer/n)+1] : [0,0];
}

- `words`를 `reduce`시킨다
- 해당 과정에서 `answer`를 `||`를 통해 거르는데 이때 `slice`를 통해 배열을 잘라와 `indexOf`를 통해 중복을 걸러내고 다음 첫번째 글자와 비교하여 인덱스를 `answer`에 할당할지 판단한다.
- 이때 `reduce`의 리턴값을 현재 값의 맨 마지막 글자로 두어 다음 계산이 돌아갈 때 첫글자와 비교할 수 있게 한다.
*/