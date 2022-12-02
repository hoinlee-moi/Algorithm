function solution(board, moves) {
    let count = 0
    let answer = [];
    moves.forEach(val=>{
        for(let i=0;i<=board.length-1;i++){
            if(board[i][val-1]!=0){
                answer.push(board[i][val-1])
                board[i][val-1] = 0
                break;
            }
        }
    })
    while(true){
        for(let i=1;i<=answer.length-1;i++){
            if(answer[i]===answer[i-1]){
                count +=2
                answer.splice(i-1,2)
            }
        }
        if(answer.filter((v,i)=> v===answer[i+1]).length===0) break;
    }
    return count
}