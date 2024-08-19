function solution(str1, str2) {
    const multi1 = multiset(str1)
    const multi2 = multiset(str2)
    const unionResult = union(multi1,multi2)
    const interResult = inter(multi1,multi2)
    console.log(unionResult,interResult)
    if(interResult===0&&unionResult===0) return 65536
    return ~~(unionResult/interResult*65536);
}


function multiset(str){
    const obj = {}
    for(let i=0; i<str.length-1; i+=1){
        const val = str.slice(i,i+2).toLowerCase()
        if(/^[a-zA-Z]{2}/.test(val)){
            obj[val] = obj[val] ? obj[val]+1 : 1
        }
    }
    return obj
}

function union (obj1,obj2){
    let len = 0
    for(const key of Object.keys(obj1)){
        if(obj2[key]){
            len += obj1[key]>obj2[key]?obj2[key]:obj1[key]
        }
    }
    return len
}

function inter (obj1,obj2){
    const obj = {...obj2}
    for(const key of Object.keys(obj1)){
        if(obj[key])
            obj[key] = obj[key]>obj1[key]?obj[key]:obj1[key]
         else obj[key] = obj1[key]
    }
    return Object.values(obj).reduce((acc,val)=>acc+val,0)
}