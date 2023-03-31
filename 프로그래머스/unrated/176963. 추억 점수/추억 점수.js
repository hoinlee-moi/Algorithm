function solution(name, yearning, photo) {
    let reuslt = photo.map(v=>{
        let count = 0
        v.forEach(val=>{
            count += yearning[name.indexOf(val)]??0
        })
        return count
    })
    return reuslt;
}