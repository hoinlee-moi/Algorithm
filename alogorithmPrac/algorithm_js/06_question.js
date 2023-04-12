// https://www.acmicpc.net/problem/4673


let all_num = Array(10001).fill(true)

for (let i =0; i<=10000; i++) {
  all_num[d(i)] = false
}
for(let i =0; i<10000; i++) {
  if(all_num[i]) {
    console.log(i)
  }
}
function d(num) {
  let result = num
  let real_num = num.toString()
  for (let i=0; i<real_num.length; i++){
    result += parseInt(real_num[i])
  }
    return result
}
