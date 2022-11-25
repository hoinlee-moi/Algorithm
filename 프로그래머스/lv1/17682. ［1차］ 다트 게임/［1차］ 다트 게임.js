function solution(dartResult) {
    let bonusScore = [1,1,1];
    const scoreArr = dartResult.split(/[^0-9]/g).filter(v=>v!="");
    const plusScoreArr = dartResult.split(/[0-9]/g).filter(v=>v!="").map((v,i)=>{
        if(v[1]==="*"){
            bonusScore[i-1] *=2
            bonusScore[i] *=2
        } else if(v[1]==="#") bonusScore[i] *= -1
        if(v[0]==="S")return scoreArr[i]**1
        if(v[0]==="D")return scoreArr[i]**2
        if(v[0]==="T")return scoreArr[i]**3
    })
    return plusScoreArr.reduce((acc,cur,idx)=>{
        return acc+(cur * bonusScore[idx])
    },0)
}

/*
전제 조건으로 기회가 3번이니 배열의 인덱스는 총 3개로 구성했다.
먼저 bonusScore를 배열로 지정해 두었는데 이는 *이나 # 값이 들어올 때 각 기회 별로 곱해줄 값을 따로 빼기 위해서 두었다.
1,1,1로 둔 이유는 *이 중첩될 경우 2*2배나 #이 중첩될 경우 2*-1 등을 해야하는데 0으로 둘 경우 곱하면 0 값이 도출 되고 1은 곱해도 자기자신이기 때문에 그 기회에 *이나 # 값이 없더라도 문제가 없다.

split의 정규식을 활용하여 각 기회별로 숫자 점수 부분을 뜯어낸 배열(scoreArr) SDT와 *#으로 이루어진 배열(plusScoreArr)을 만들어 낸다.

이 때 SDT와*#으로 이루어진 배열에서 map을 이용해 각 인덱스 값에 *이 있으면 bonusScore와 같은 인덱스에 *2 그 전 인덱스에 *2를 해서 효과를 넣고 #으로 될 경우 bonusScore에서의 같은 인덱스에 -1을 곱한다.

그리고 동시에 SDT를 구별하여 scoreArr의 같은 위치의 인덱스를 제곱한 값으로 return하여 plusScoreArr의 값은 *과#을 제외한 숫자 점수와 SDT점수만을 계산한 배열로 변한다.

총 합계를 구하기 위해 SDT점수만을 계산한 배열 즉 plusScoreArr을 reduce 하는 데 이때 현재 값과 같은 위치(같은 기회)의 bonusScore를 곱하여 계산합니다.(각 기회별로 스타상과 아차상이 적용될 수 있도록)
*/