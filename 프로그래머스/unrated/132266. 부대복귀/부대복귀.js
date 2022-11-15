function solution(n, roads, sources, destination) {
    const graph = new Array(n+1).fill(null).map(_=>[]);
    for(let [a,b] of roads){
        graph[a].push(b);
        graph[b].push(a);
    }
    //graph = [ [], [ 2, 4 ], [ 1, 4, 5 ], [], [ 1, 2, 5 ], [ 2, 4 ] ]
    // 경로를 담아놓음 0번값을[]으로 두어 인덱스 123이 지역 123과 동일하게 함
    const visited = new Array(n+1).fill(Infinity); // 방문 한 곳들을 담을 배열 생성
    // vistited = [ Infinity, Infinity, Infinity, Infinity, Infinity, Infinity ]
    const bfs = (destination) =>{
        const q = [destination];// q에 도착지를 집어넣고 q = [ 5 ]
        visited[destination] = 0; // 도착지를 Infinity값에서 0으로 바꿈
        // visited = [ Infinity, Infinity, Infinity, Infinity, Infinity, 0 ]
        while(q.length > 0){ // q가 있을 경우
            const idx = q.shift();// q에서 값을 하나 빼서 
            // 1 : idx= 5 / 2 : idx= 2 / 3 : idx= 4 / 4 : idx = 1
            // 1 : q = [] / 2 : q= [4] / 3 : q= [1] / 4 : q=[]
            for(let newIdx of graph[idx]){// q값이 있던 경로를 부름
                 // 1 : [ 2, 4 ] / 2 : [ 1, 4, 5 ] / 3 :  [ 1, 2, 5 ] / 4 : [ 2, 4 ]
                if(visited[idx]+1 < visited[newIdx]){
                    // 1 : visited[idx] = 0 / 2 : visited[idx] = 0 / 3 : idx= 4visited[idx] = 1
                    // 조건에 통과 되려면 visited[newIdx] = Infinity
                    visited[newIdx] = visited[idx]+1;
                    /*
                    1 : [ Infinity, Infinity, 1, Infinity, Infinity, 0 ]
                    2 : [ Infinity, Infinity, 1, Infinity, 1, 0 ]
                    3 : [ Infinity, 2, 1, Infinity, 1, 0 ]
                    */
                    q.push(newIdx);
                    // 1 : q = [ 2 ] / 2 : q = [ 2, 4 ] / 3 : q =[ 4, 1 ]
                }
            }
        }
    }
    bfs(destination);
    console.log(visited)
    return sources.map(v=>{
        if(visited[v] === Infinity) return -1;
        else return visited[v];
    });
}