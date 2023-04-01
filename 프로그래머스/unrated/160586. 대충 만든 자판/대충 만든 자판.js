function solution(keymap, targets) {
    let answer = targets.map(v=>{
        let count = []
        for(let i=0;i<=v.length-1;i++){
            let order = []
            for(let j=0; j<=keymap.length-1; j++){
                if(keymap[j].indexOf(v[i])===-1) continue;
                order.push(keymap[j].indexOf(v[i])+1)
            }
            order.length>0?count.push(Math.min(...order)):count.push(-1)
        }
        if(count.includes(-1)) return -1
        return count.reduce((acc,cur)=>acc+cur)
    })
    return answer;
}