function solution(a, b, n) {
    let allBottle = 0
    while(a<=n) {
        let changeBottle = Math.floor(n/a)*b
        let leftBottle = n%a
        n = changeBottle+leftBottle
        allBottle += changeBottle
    }
    return allBottle;
}

/*
변환할 총 개수의 변수를 지정해 놓고
while문을 통해 가진 개수가 최소 변환 개수 a 보다 작아질 때까지 반복한다.
바꾼 병은 가진 병 개수를 a개로 나눈 후 소수점 자린 버려준다.(무조건 a개가 되어야 바꿔주기 때문)
이후 남은 병 개수는 나머지로 계산한다.
가진 병의 개수 n은 변환한 개수 changeBottle와 남은 병 leftBottle를 합쳐준 값으로 변환하고
변환할 총 개수에 변환한 병 개수를 더한다.
*/