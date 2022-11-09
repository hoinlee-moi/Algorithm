function solution(phone_number) {
    const secret = phone_number.split("").map((v,i,arr)=> {
        if(i<arr.length-4) return "*"
        else return v
    })
    return secret.join("")
    
}
/*
phone_number = phone_number.split("")
for(let i=0; i<phone_number.length-4;i++) phone_number[i] = "*"
return phone_number.join("")
*/
/*
const secret = phone_number.split("").splice(0,phone_number.length-4).map(v=> "*").join("");
const lastNum = phone_number.split("").splice(phone_number.length-4,4).join("")
return secret+lastNum;
*/
    