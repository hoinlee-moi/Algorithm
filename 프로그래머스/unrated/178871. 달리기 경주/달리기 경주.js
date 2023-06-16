function solution(players, callings) {
    let playerMap = new Map()
    players.map((v,i)=>{
        playerMap.set(v,i+1)
    })
    callings.map(v=>{
        const rank = playerMap.get(v)
        const front = players[rank-2]
        players[rank-2] = v
        players[rank-1] = front
        playerMap.set(v,rank-1)
        playerMap.set(front,rank)
    })
    return players;
}