function solution(numbers) {
    const sum = numbers.reduce((acc,value) => acc+value )
    const answer = sum/numbers.length
    return answer;
}

/*
먼저 배열의 합을 array함수인 reduce를 이용하여 더함 이후 평균값을 길이로 나눠 값을 return한다.
이 때 제한사항에 정수만 return하란 게 없으니 그대로 
*/