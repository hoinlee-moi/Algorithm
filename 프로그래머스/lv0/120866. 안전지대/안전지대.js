function solution(board) {
    let boom = []
    for(let i=0; i<=board.length-1; i++) {
        for(let j=0; j<=board.length-1; j++) {
            if(board[i][j]===1) {
                boom.push([i,j],[i-1,j-1],[i,j-1],[i+1,j-1],[i-1,j],[i+1,j],[i-1,j+1],[i,j+1],[i+1,j+1])
            }
        }
    }
    if(boom.length === 0) return board.length**2
    const dangerFirstFilter = boom.filter(v=> v[0]<=board.length-1&&v[0]>=0)
    const dangerSecondFilter = dangerFirstFilter.filter(v=>v[1]<=board.length-1&&v[1]>=0)
    const dangerSet = [...new Set(dangerSecondFilter.join('|').split('|'))]
    const onlyDanger = dangerSet.map(v=> v.split(",")).map(v=>[+v[0],+v[1]])
    return (board.length**2)-onlyDanger.length 
}

/*
먼저 폭탄이 있는 좌표를 이중for문으로 구한뒤 그 주변 위험 좌표를 전부 집어 넣는다.
이후 폭탄이 없다면 안전지역은 모든 지역으로 return하는 코드를 넣고 아니라면 filter를 통해 x값과 y값이 각 좌표의 끝들을 넘지 않는 값을 찾아낸다.
2번의 filter로 x와 y값의 위험지역을 모두 분리하였다면 중복된 값을 제거하는데 2차배열이기 때문에 join("|")을 통해 string값으로 바꾼 후 다시 split("|")시켜 1차배열로 바꾼다.
그 다음 map으로 각 요소들을 분리 시킨다음 또 한번 map을 사용해 2차원배열 split으로 인해 String값이 된 요소들을 Number로 변경시킨다.
마지막으로 n*n의 배열인만큼 board.length의 제곱에서 위헙지역의 수를 제외한다.
*/
