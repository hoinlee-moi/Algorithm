// https://school.programmers.co.kr/learn/courses/30/lessons/120833  배열자르기

function solution(numbers, num1, num2) {
    return numbers.slice(num1, num2+1);
}

/*
배열로부터 특정 범위를 복사한 값을 가지느 slice를 이용해 주어지 인자를 받아 새로운 배열로 반환시켜 해결
다만 slice경우 두번째 인자에 종료를 받기 때문에 포함시키기 위해서 +1을 시킴
 */


//https://school.programmers.co.kr/learn/courses/30/lessons/120826  특정 문자 제거하기

function solution(my_string, letter) {
    return my_string.split(letter).join('')
}

/*
요즘 문자열을 처리할 때 배열로 바꿔 처리한 뒤 join으로 다시 뱉는 걸 많이 하는 것 같다. split을 통해 해당 단어를 제외해서 배열로 만든 후 join으로 다시 문자열로 내보내서 해결.0.03ms
*/
Array.from(my_string).filter(t => t !== letter).join(''); // 같은 문제를 filter로 하는 것도 있었으며 0.04~0.05ms
my_string.replaceAll(letter, ''); // relace를 이용한 방식도 볼 수 있었다. 0.03ms


// https://school.programmers.co.kr/learn/courses/30/lessons/120841  점의위치구하기

function solution(dot) {
    let answer = 0;
    if(dot[0]>0 && dot[1]>0) answer = 1;
    if(dot[0]<0 && dot[1]>0) answer = 2;
    if(dot[0]<0 && dot[1]<0) answer = 3;
    if(dot[0]>0 && dot[1]<0) answer = 4;
    return answer;
}

/*
조건이 총 4개가 등장해서 if문을 하나씩 전부 통과하도록 했다. else if로 계속 돌지 않도록 if를 4번 이용했고 실제 코딩할 땐 return으로 무한 콜백이 되지 않도록 했었다.
 */
function solution(dot) {
    const [num,num2] = dot;
    const check = num * num2 > 0;
    return num > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
}
/*
수학적 사고로 조금만 더 생각했었다면 삼항연산자를 이용해 처리할 수 있었는데 아쉽다. 곱한 수가 양수인 조건을 하나 만들고 첫번째 점이 양수인지 음수인지를 통한다면 삼항연산자가 가능했다.
 */
