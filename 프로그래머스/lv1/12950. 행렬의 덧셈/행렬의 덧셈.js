function solution(arr1, arr2) {
    const answer = arr1.map((v,i)=>v.map((value,index)=>{
        return value+arr2[i][index]
    }))
    return answer;
}

/*
for문을 중첩으로 돌리는 걸 생각하다가 map도 2번 쓰면 되지 않나 싶어 사용했다.
2차 배열이니 첫 map을 돌면 arr1의 첫번째 배열이 오고 거기서 또 map을 돌면 안의 원소값에 접근 가능하다.
이후 중접for문을 계산하는 식으로 진행한다.
*/