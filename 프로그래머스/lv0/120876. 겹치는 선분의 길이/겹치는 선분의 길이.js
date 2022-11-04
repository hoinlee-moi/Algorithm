function solution(lines) {
    let line = new Array(200).fill(0);

    lines.forEach(([a, b]) => {
        for(; a < b; a++) {
            line[a+100]++
        }
    });

    return line.reduce((a, c) =>  c > 1 ? a + 1 : a, 0)
}

/*
못 풀었음!
대부분의 사람들이 이런식으로 푼 것 같다. fill을 통해 길이를 전부 0으로 채운 후 forEach문을 통해 3개의 라인을 받는다.
그리고 그 라인에 for문을 돌려 그 라인에 ++를 하게된다.
그리고 reduce를 돌려 1 이상인 곳을 찾으면 그 전 for문을 돌려 라인별로 ++할 때 겹쳐있기에 1이상이 된 것으로 겹친 라인의
길이를 구할 수 있게 된다
*/