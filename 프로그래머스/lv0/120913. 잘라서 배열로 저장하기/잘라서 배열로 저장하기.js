function solution(my_str, n) {
    let answer = [];
    my_str = my_str.split('')
    while(true){
        if(my_str.length<n) {
            let str =my_str.splice(0,my_str.length).join('')
            answer.push(str)
            break;
        } else{
            let str = my_str.splice(0,n).join('')
            answer.push(str)
        };
    }
    return answer.filter(e=>e !="");
}