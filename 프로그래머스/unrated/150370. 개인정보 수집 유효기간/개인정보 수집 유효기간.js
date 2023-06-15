function solution(today, terms, privacies) {
    const result = []
    const map = new Map()
    const todayArr = today.split(".")
    terms.map(v=>{
        const term = v.split(" ")
        map.set(term[0],term[1])
    })
    privacies.map((v,i)=>{
       const ex = map.get(v[v.length-1])
       const date = v.substring(0,v.length-2)
       const dateArr = date.split(".")
       
       let year = 0
       let month = Number(dateArr[1])+Number(ex)
       if(month>12) {
           year = month%12===0?Math.floor(month/12)-1:Math.floor(month/12)
           month = month%12===0?12:month%12
       }
        dateArr[2] = Number(dateArr[2])-1===0?28:Number(dateArr[2])-1
        dateArr[1] = month
        dateArr[0] = Number(dateArr[0])+year
        if(dateArr[2]===28) {
            if(dateArr[1]-1===0){   
                dateArr[1]=12
                dateArr[0]-=1
            }else dateArr[1] -=1
        }
        console.log(todayArr,dateArr)
        for(let j=0; j<=todayArr.length-1; j++) {
            if(Number(todayArr[j])>Number(dateArr[j])){
                result.push(i+1)
                break;
            }else if(Number(todayArr[j])<Number(dateArr[j])){
                break;
            }
            
        }
    })
    return result;
}