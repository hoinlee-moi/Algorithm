function solution(dots) {
    let compare = [];
    const com = dots.forEach((v,i)=> {
        for(let j=i+1; j<dots.length; j++ ){
            let comResult = [];
            let inclination = Math.abs(v[0]-dots[j][0]) / Math.abs(v[1]-dots[j][1])
            compare.push(inclination)
        }
    })
    const set = new Set(compare)
    const setCompare = [...set]
    return setCompare.length!=compare.length ? 1 : 0;
}