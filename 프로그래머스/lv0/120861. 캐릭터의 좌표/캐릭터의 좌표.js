function solution(keyinput, board) {
    board[0] = Math.floor(board[0]/2)
    board[1] = Math.floor(board[1]/2)
    let result = [0,0]
    for(let i = 0; i<keyinput.length; i++) {
          if(keyinput[i] === "left") {
             if(-result[0]<Math.floor(board[0])) result[0]--
          }
          if(keyinput[i] === "right") {
             if(result[0]<Math.floor(board[0])) result[0]++
          }
        
          if(keyinput[i] === "up"){
            if(result[1]<Math.floor(board[1])) result[1]++
            } 
          if(keyinput[i] === "down") {
            if(-result[1]<Math.floor(board[1])) result[1]--
            } 
    }
        
    
    return result
}
