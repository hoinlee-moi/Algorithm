function solution(s, skip, index) {
    const skipAscii = skip.split("").map(v=>v.charCodeAt())
    const convert = s.split("").map(v=>{
        let ascii = v.charCodeAt()
        for(let i=0;i<index;i++){
            ascii++
            if(ascii>"z".charCodeAt()) {
                ascii=(ascii-"z".charCodeAt()-1)+"a".charCodeAt()
            }
            while(skipAscii.includes(ascii)) {
                ascii++
                if(ascii>"z".charCodeAt()) {
                ascii=(ascii-"z".charCodeAt()-1)+"a".charCodeAt()
            }
            }
        }
        return String.fromCharCode(ascii)
    })
    return convert.join("")
}