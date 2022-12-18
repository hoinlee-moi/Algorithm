function solution(s) {
    const arr = s.split(" ").map(v=>+v)
    return `${Math.min(...arr)} ${Math.max(...arr)}`;
}

// Math가 문자열도 가능하다는 사실을 몰라서 `map`반복문이 한 번 들어갔는데 문자열도 자동 형변환 돼서 가능하다면 굳이 `map`을 쓸 필요가 없을 것 같다.