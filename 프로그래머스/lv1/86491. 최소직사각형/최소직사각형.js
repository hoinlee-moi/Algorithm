function solution(sizes) {
    let width = sizes.map(v=> v[0]>v[1]?v[0]:v[1])
    let vertical = sizes.map(v=> v[0]>v[1]?v[1]:v[0])
    return Math.max(...width)*Math.max(...vertical)
}

/*
먼저 가로에서 가장 크게 들어갈 길이값을 필요하기에 카드를 회전해도 가장 큰 값을 도출해내도록 만들었다.
map을 이용해 크기 비교로 각 카드들의 가로세로 구분없이 가장 긴 값과 나머지값들을 구해
가장 긴 값과 나머지 값들중 가장 긴 값을 곱하여 답을 도출
*/