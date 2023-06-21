function solution(elements) {
    let set = new Set()
    for(let i=1; i<=elements.length; i++) {
        let result = 0
        if(i===1) {
            elements.forEach(v=> set.add(v))
            continue;
        }
        if(i===elements.length){
            result = elements.reduce((acc,cur)=> acc+cur,0)
            set.add(result)
            continue;
        }
        for(let j=0; j<=elements.length-1; j++) {
            let sum = 0
            if(j+i>elements.length-1) {
                let arr1 = elements.slice(j)
                let arr2 = elements.slice(0,i-arr1.length)
                sum = arr1.reduce((acc,cur)=>acc+cur,0)+arr2.reduce((acc,cur)=>acc+cur,0)
                set.add(sum)
                continue;
            }
            let arr = elements.slice(j,i+j)
            sum = arr.reduce((acc,cur)=>acc+cur,0)
            set.add(sum)
        }
    }
    return set.size;
}