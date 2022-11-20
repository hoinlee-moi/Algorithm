function solution(score) {
    const answer = score.map(v=>v[0]+v[1]);
    const answerSort = [...answer]
    answerSort.sort((a,b)=>b-a)
    console.log(answer,answerSort)
    const order = answer.map(v=>answerSort.indexOf(v)+1)
    return order
}