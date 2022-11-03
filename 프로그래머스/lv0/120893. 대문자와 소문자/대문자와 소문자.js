function solution(my_string) {
    let answer = my_string.split("").map(str=>
        str === str.toUpperCase() ? str.toLowerCase() : str.toUpperCase()
    ).join("");
    return answer;
}

