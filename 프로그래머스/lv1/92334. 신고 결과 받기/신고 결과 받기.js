function solution(id_list, report, k) {
    const reportList = new Map();
    const mail = []
    report.forEach(v=>{
        let id = v.split(" ")[1]
        let reportId = v.split(" ")[0]
        reportList.set(id,(reportList.get(id)||"")+" "+reportId)
    })
    const reportListArr = [...reportList]
    reportListArr.forEach(v=>{
        const reportArr = v[1].split(" ")
        const set = new Set(reportArr)
        if(set.size-1>=k){
            [...set].forEach(v=>v!=""?mail.push(v):false)
        }
    })
    return id_list.map(v=>mail.filter(val=>val===v).length);
}

/*
각 id마다 누구누구에게 신고 받았는지 알기 위해 Map객체를 만들었고 추후 메일을 보낼 사람들을 알기 위해 따로 mail이란 배열을 만들었다
이후 report를 반복해 map에 누가 신고 당했는지와 신고한 사람이 누구인지 체크했다.
(이때 미리 중복값을 제거 했다면 굳이 문자열이 아닌 숫자로 판가름 했을것이다.)
그리고 판별을 위해 배열로 변경한 뒤 다시 반복문을 돌렸다.
반복문을 돌리며 신고자들의 중복값을 Set으로 제거하고 제거한 값의 개수가 k의 수를 넘어가면 mail배열에 집어넣는다.
마지막으로 id_list배열의 값이 mail배열에서 총 몇개있는지 검사하여 return

다른풀이!
function solution(id_list, report, k) {
    let reports = [...new Set(report)].map(a=>{return a.split(' ')});
    let counts = new Map();
    for (const bad of reports){
        counts.set(bad[1],counts.get(bad[1])+1||1)
    }
    let good = new Map();
    for(const report of reports){
        if(counts.get(report[1])>=k){
            good.set(report[0],good.get(report[0])+1||1)
        }
    }
    let answer = id_list.map(a=>good.get(a)||0)
    return answer;
}

*/

