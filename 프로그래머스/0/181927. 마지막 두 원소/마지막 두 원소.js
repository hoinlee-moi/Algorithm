function solution(num_list) {
    const last = num_list.at(-1)
    const lastBefore = num_list.at(-2)
    return  last>lastBefore?num_list.push(last-lastBefore):num_list.push(last*2),num_list
}
/*
function solution(num_list) {
    const [a, b] = [...num_list].reverse();
    return [...num_list, a > b ? (a-b):a*2];
}
숏코딩이긴 하나 const[] 선언으로 배열 하나 만드는 메모리가 사용되고 또 reverse를 통해 메모리가 뒤집어 진다
추가적으로 return 할때 또 배열을 만듬으로써 성능적으론 좋지 않다
*/