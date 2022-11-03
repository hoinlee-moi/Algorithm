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
    const onlyDanger = dangerSet.map(v=> v.split(",")).map(v=>[Number(v[0]),Number(v[1])])
    return (board.length**2)-onlyDanger.length 
}