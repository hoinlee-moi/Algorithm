function solution(my_string) {
    const answer = my_string.split(/[a-z]|[A-Z]/g).reduce((acc,v)=> Number(acc)+Number(v),0)
    return answer;
}