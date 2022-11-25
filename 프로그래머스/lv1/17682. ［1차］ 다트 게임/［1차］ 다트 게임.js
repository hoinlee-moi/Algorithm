function solution(dartResult) {
    let score = [1,1,1];
    const scoreArr = dartResult.split(/[^0-9]/g).filter(v=>v!="");
    const plusScoreArr = dartResult.split(/[0-9]/g).filter(v=>v!="").map((v,i)=>{
        if(v[1]==="*"){
            score[i-1] *=2
            score[i] *=2
        } else if(v[1]==="#") score[i] *= -1
        if(v[0]==="S")return scoreArr[i]**1
        if(v[0]==="D")return scoreArr[i]**2
        if(v[0]==="T")return scoreArr[i]**3
    })
    return plusScoreArr.reduce((acc,cur,idx)=>{
        return acc+(cur * score[idx])
    },0)
}