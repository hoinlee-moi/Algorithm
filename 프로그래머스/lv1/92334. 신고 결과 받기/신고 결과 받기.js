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