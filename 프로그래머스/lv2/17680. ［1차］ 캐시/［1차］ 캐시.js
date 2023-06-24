function solution(cacheSize, cities) {
    let answer = 0;
    let obj = {}
    for(let i=0; i<=cities.length-1;i++) {
        if(cacheSize===0) {
            answer+=5
            continue;
        }
        let city = cities[i].toLowerCase()
        let key = getKeyByValue(obj,city)
        if(key!==undefined){
            answer += 1
            delete(obj[key])
            obj[i] = city
            continue;
        }
        if(Object.keys(obj).length===cacheSize) {
            let idx = Math.min(...Object.keys(obj)).toString()
            delete(obj[idx])
            obj[i] = city
            answer += 5
            continue;
        }
        obj[i] = city
        answer +=5
    }

    return answer;
}

function getKeyByValue(obj, value) {
  return Object.keys(obj).find(key => obj[key] === value);
}