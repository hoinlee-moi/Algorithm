function solution(n, words) {
    let answer = [0,0]
    let word = [words[0]];
    for(let i=1; i<=words.length-1; i++){
        let lastWord = word[word.length-1]
        if(word.includes(words[i])||lastWord[lastWord.length-1]!==words[i][0]){
            answer[0] += (i%n)+1
            answer[1] += Math.floor(i/n)+1
            break;
        }
        word.push(words[i])
    }

    return answer;
}