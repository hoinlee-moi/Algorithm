function solution(s){
    if(s[0]===")"||s[s.length-1]==="(") return false
    const arr=s.split("")
    let braket = [];
    arr.forEach(v=>{
        braket.push(v)
        if(braket[braket.length-2]+braket[braket.length-1]==="()"){
            braket.pop()
            braket.pop()
        } else if(braket[braket.length-2]==="("&&braket[braket.length-1]==="(") return false
        
    })
    return braket.length===0?true:false
}