function solution(sizes) {
    let width = sizes.map(v=> v[0]>v[1]?v[0]:v[1])
    let vertical = sizes.map(v=> v[0]>v[1]?v[1]:v[0])
    return Math.max(...width)*Math.max(...vertical)
}