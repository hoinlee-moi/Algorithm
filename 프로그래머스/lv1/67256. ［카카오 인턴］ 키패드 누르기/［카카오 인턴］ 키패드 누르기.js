function solution(numbers, hand) {
    let answer = "";
    const leftNum = [1,4,7]
    const rightNum = [3,6,9]
    const middleNum = [2,5,8,0]
    const two = [[2],[1,3,5],[4,6,8],[7,9,0],["#","*"]]
    const five = [[5],[2,4,6,8],[1,3,7,9,0],["#","*"]]
    const eight = [[8],[0,5,7,9],["#","*",2,4,6],[1,3]]
    const zero = [[0],["#","*",8],[5,7,9],[2,4,6],[1,3]]
    let leftLocation = "*";
    let rightLocation = "#";
    let leftDistance = 0;
    let rightDistance = 0;
    for(let i=0; i<=numbers.length-1;i++){
        if(leftNum.includes(numbers[i])) {
            answer+="L"
            leftLocation = numbers[i]
            continue;
        }
        if(rightNum.includes(numbers[i])) {
            answer+="R"
            rightLocation = numbers[i]
            continue;
        }
        if(middleNum.includes(numbers[i])){
            if(numbers[i]===2) {
                two.forEach((val,i)=>{
                    if(val.includes(leftLocation)) leftDistance = i
                    if(val.includes(rightLocation)) rightDistance = i
                })
            }
            if(numbers[i]===5) {
                five.forEach((val,i)=>{
                    if(val.includes(leftLocation)) leftDistance = i
                    if(val.includes(rightLocation)) rightDistance = i
                }) 
            }
            if(numbers[i]===8) {
                eight.forEach((val,i)=>{
                    if(val.includes(leftLocation)) leftDistance = i
                    if(val.includes(rightLocation)) rightDistance = i
                }) 
            }
            if(numbers[i]===0) {
                zero.forEach((val,i)=>{
                    if(val.includes(leftLocation)) leftDistance = i
                    if(val.includes(rightLocation)) rightDistance = i
                }) 
            }
            
            if(leftDistance===rightDistance) {
                if(hand==="right"){
                    answer+="R"
                    rightLocation = numbers[i]
                }else{
                    answer+="L"
                    leftLocation = numbers[i]
                }
            }
            if(leftDistance>rightDistance){
                answer+="R"
                rightLocation = numbers[i]
            } else if(leftDistance<rightDistance){
                answer+="L"
                leftLocation = numbers[i]
            }
        }
    }    
    return answer;
}