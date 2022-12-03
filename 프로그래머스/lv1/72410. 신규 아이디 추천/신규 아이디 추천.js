function solution(new_id) {
    new_id = alphabetLowerCase(new_id)
    new_id = stringReplace(new_id)
    new_id = continueDotDelete(new_id.split(""))
    if(new_id[0]==="."||new_id[new_id.length-1]===".") new_id=startEndDotDelete(new_id.split(""))
    if(new_id.length>=16) new_id = removeLongText(new_id)  
    if(new_id[0]==="."||new_id[new_id.length-1]===".") new_id=startEndDotDelete(new_id.split(""))
    if(new_id==="") new_id="a"
    if(new_id.length<=2) new_id = recycleText(new_id)
    return new_id
}

const alphabetLowerCase = str =>  str.toLowerCase()
const stringReplace = str=> str.replace(/[^a-z0-9_.-]/g,"")
const continueDotDelete = array=>{
    array.forEach((val,idx,arr)=>{
        if(val==="."&&arr[idx+1]==="."){
            for(let i=idx; i<=arr.length-1;i++){
                if(arr[i]!="."){
                    arr.splice(idx,i-idx-1)
                    break;
                }
                else if(i===arr.length-1){
                    arr.splice(idx,i-idx)
                }
            }
        }
    })
    return array.join("")
}
const startEndDotDelete = array =>{
    if(array.indexOf(".")===0) array[0]=""
    if(array.lastIndexOf(".")===array.length-1) array[array.length-1]=""
    return array.join("")
}
const removeLongText = str =>  str.substring(0,15)
const recycleText = str => {
    while(str.length<3){
        str += str[str.length-1]
    }
    return str
}

