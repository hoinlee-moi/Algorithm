function solution(num_list) {
    let num = num_list.filter(v=>v%2===0).join("")
    let num2 = num_list.filter(v=>v%2!==0).join("")
    return Number(num)+Number(num2);
}