function solution(brown, yellow) {
    const x = (brown - 12) * 0.5;
    const y = yellow - brown + 8;
    const i = ( 8 + x + Math.sqrt( Math.pow(x, 2) - (4 * y) ) ) * 0.5;
    const j = ( 8 + x - Math.sqrt( Math.pow(x, 2) - (4 * y) ) ) * 0.5;
    console.log(i)


    var answer = [i, j];
    return answer;
}