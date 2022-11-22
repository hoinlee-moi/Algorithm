function solution(my_string) {
    let vowel = ['a','e','i','o','u']
    return my_string.split("").filter(str => vowel.includes(str)?false:true).join("")
}