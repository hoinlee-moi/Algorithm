// function solution(a, b, n) {
//     let allBottle = 0
//     while(a<=n) {
//         let changeBottle = Math.floor(n/a)*b
//         let leftBottle = n%a
//         n = changeBottle+leftBottle
//         allBottle += changeBottle
//     }
//     return allBottle;
// }

solution = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b