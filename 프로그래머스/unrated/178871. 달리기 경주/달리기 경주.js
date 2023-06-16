function solution(players, callings) {
    let rankMap = new Map()
    let playerMap = new Map()
    let result = []
    players.map((v,i)=>{
        rankMap.set(i+1,v)
        playerMap.set(v,i+1)
    })
    callings.map(v=>{
        const rank = playerMap.get(v)
        const front = rankMap.get(rank-1)
        playerMap.set(v,rank-1)
        playerMap.set(front,rank)
        rankMap.set(rank-1,v)
        rankMap.set(rank,front)
    })
    for(let value of rankMap.values()){
        result.push(value)
    }
    return result;
}