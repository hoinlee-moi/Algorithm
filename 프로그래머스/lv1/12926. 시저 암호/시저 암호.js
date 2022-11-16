function solution(s, n) {
    let answer =""
    for(let i=0;i<s.length; i++) {
        if(s[i]===" ") {
            answer += " "
            continue;
        }
        let uni = s[i].charCodeAt()
        if(65<=uni && uni<=90) {
            answer += uni+n>90 ?  String.fromCharCode(64+n-(90-uni)) : String.fromCharCode(uni+n)
        } else if(97<=uni && uni<=122) {
            answer += uni+n>122 ?  String.fromCharCode(96+n-(122-uni)) : String.fromCharCode(uni+n)
        }
    }
    return answer
}