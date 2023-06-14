function solution(wallpaper) {
    let a = []
    let b = [];
    wallpaper.map((v,i)=>{
        if(v.includes("#")) {
            a.push(i)
            b.push(v.indexOf("#"))
            b.push(v.lastIndexOf("#"))
        }
    })
    return [Math.min(...a),Math.min(...b),Math.max(...a)+1,Math.max(...b)+1];
}