function solution(code) {
    let mode=false;
    return code.split("").reduce((acc,cur,idx)=>{
        if(cur==="1"){
            mode = !mode
            return acc
        }
        if(mode){
            return idx%2!==0 ? acc+cur:acc
        }
        return idx%2===0?acc+cur:acc
    } ,"")||'EMPTY';
    
}