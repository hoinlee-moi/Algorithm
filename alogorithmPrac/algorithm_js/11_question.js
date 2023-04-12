let a = [1,1,1,1,1,1,1,1,1,1,1,1,1,7]
let b = [1,2,2,2,2,2,2,2,2,2,2,2,2]


function solution(queue1, queue2) {
    let count =0;
    let stop = queue1.length *3
    let bool = true 
    let sum1 = queue1.reduce((acc, value) => acc + value,
    0)
    let sum2 = queue2.reduce((acc, value) => acc + value,
    0)
    if(sum1+sum2 %2 ===1){
        count =-1
    } else{
        while(bool){
            console.log(sum1,sum2)
            switch (true) {
                case sum1 ===sum2 : 
                bool = false
                break
                case sum1<sum2 :
                    let num = queue2[0]
                    sum1 += num
                    sum2 -= num
                    queue2.splice(0,1)
                    queue1.push(num)
                    count++
                break
                case sum1>sum2 :
                    let num2 = queue1[0]
                    sum2 += num2
                    sum1 -= num2
                    queue1.splice(0,1)
                    queue2.push(num2)
                    count++
                break
            }
            if(count>stop) {
                count = -1
                break
            }
        }
    }
    return count    
}
console.log(solution(a,b))