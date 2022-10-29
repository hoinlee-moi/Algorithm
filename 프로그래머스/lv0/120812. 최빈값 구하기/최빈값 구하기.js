function solution(array) {
    array.sort((a,b)=>a-b)
    const set = new Set(array)
    const newArray = [...set]
    if(newArray.length===1) return newArray[0]
    const frequency = newArray.map(v=>array.lastIndexOf(v)-array.indexOf(v)+1)
    if(frequency.filter(v=>v===Math.max(...frequency)).length >1) return -1
    return newArray[frequency.indexOf(Math.max(...frequency))]
}

/* 
먼저 막 섞인 숫자들을 내림차순으로 정리한 뒤 set으로 복수 값들을 제외한 수가 무엇인지 파악한다.
그리고 그 숫자들이 array배열에서의 첫번째 등장 index랑 마지막 index를 계산하여 몇개가 들어갔는지 확인한
빈도값을 map을 이용해 도출한다.
이후 그 빈도값을 이용해 최대값 즉 빈도수가 높은 게 여러개이면 -1을 return 아니면 가장 높은 빈도값의 인덱스를
중복 제거한 newArray이에 적용하여 빈도값을 추출한다.
*/