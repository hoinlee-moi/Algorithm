function solution(players, callings) {
    let idx;
    let name1;
    let name2;
    const idxList = {}

    players.forEach((name,index)=>idxList[name]=index)
    for(let call of callings){
        idx = idxList[call]
        name1 = players[idx]
        name2 = players[idx-1]
        idxList[call]-=1
        idxList[name2]+=1
        players[idx] = name2
        players[idx-1] = name1
    }    

    return players;
}