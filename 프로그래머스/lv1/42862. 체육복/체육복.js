function solution(n, lost, reserve) {
    const uniformArr = new Array(n).fill(1);
    const uniform = uniformArr.map((v,i,ar)=>{
        if(lost.includes(i+1))  --v
        if(reserve.includes(i+1))  ++v
        return v
    });
    for(let i=0; i<=uniform.length-1; i++) {
        if(uniform[i]===0) {
            if(uniform[i-1]>1) {
                uniform[i-1]--
                uniform[i]++
            }else if(uniform[i+1]>1){
                uniform[i+1]--
                uniform[i]++
            }
        }
    }
    return uniform.filter(v=>v>0).length 
}

/*
먼저 제한사항으로 학생수가 30명 이하로 n만큼의 학생을 배열로 만들고 모든 학생이 체육복을 가지고 있는다고 가정하여
1이란 숫자를 넣어준다.
그리고 배열을 map으로 돌려 도난당한 학생일 때와 여벌을 가지고 있는 학생일 때를 비교하여 각각 체육복을 ++, -- 시킨다.
이때 도난과 여벌 학생이 같으면 동시에 작업될 수 있도록 한다.
이후 도난과 여벌 학생이 구별된 uniform 배열이 완성되면 반복문 (가장 속도가 빠른 for문을 이용했다)을 사용하여 학생이 가지고 있는 체육복이 0개라면 앞쪽에 번호에 2벌을 가지고 있는지 확인하고 있다면 빌린다.
앞쪽 번호에 없다면 뒷 번호를 체크 하여 빌린다.
반복문을 통해 앞번호부터 차근차근 진행하여 체육복이 0개인 사람에게 빌려줄 수 있는만큼 모두 빌려줬다면 uniform에서 0보단 큰 값(체육복이 있는사람)의 수를 return한다.

*/