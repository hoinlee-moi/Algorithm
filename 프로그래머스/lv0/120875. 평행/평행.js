function solution(dots) {
    let compare = [];
    const com = dots.forEach((v,i)=> {
        for(let j=i+1; j<dots.length; j++ ){
            let comResult = [];
            let inclination = Math.abs(v[0]-dots[j][0]) / Math.abs(v[1]-dots[j][1])
            compare.push(inclination)
        }
    })
    const set = new Set(compare)
    const setCompare = [...set]
    return setCompare.length!=compare.length ? 1 : 0;
}

/*
맨처음 문제를 x값의 차이와 y값의 차이로만 구했었는데 몇몇 테스트에서 실패했다.
먼저 forEach문을 사용했고 각 요소마다 for문으로 현재 배열 위치의 다음부터 끝까지 비교한 값을 compare이란 배열에 넣어 2차원 배열의 비교값을 set으로 중복검사 하여 중복이 있으면 길이가 달라지는 것을 토대로 비교 했는데 실패.
이후 기울기 값을 이용하니 통과했다.
동일하게 사용 했지만 이번엔 x좌표와 y좌표의 차이 값을 2차원배열로 넣는 것이 아닌 기울기 값을 구하는 공식을 사용해 기울기 값을 비교 배열에 집어 넣었다. 이는 1차원 배열이라 더욱 쉽게 set을 사용했다.
기울기 값을 이용하니 테스트 케이스 통과
*/