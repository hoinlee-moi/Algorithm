// https://school.programmers.co.kr/learn/courses/30/lessons/120913

function solution(my_str, n) {
    let answer = [];
    my_str = my_str.split('')
    while(true){
        if(my_str.length<n) {
            let str =my_str.splice(0,my_str.length).join('')
            answer.push(str)
            break;
        } else{
            let str = my_str.splice(0,n).join('')
            answer.push(str)
        };
    }
    return answer.filter(e=>e !="");
}

/*
완전 하드 코딩 했다.. 매니저 일을 하면서 해서 그런지 집중이 잘 안돼서 되는대로 하다보니 이렇게 된 것 같다.
이따 좀 괜찮아지면 집중해서 해봐야겠다.
*/


// https://school.programmers.co.kr/learn/courses/30/lessons/120846

function solution(n) {
    var answer = 0;
    for(let i = 4; i<=n; i++) {
      if(i%2===0||i%3===0||i%5===0||i%7===0)  answer++
      if(i===5||i===7) answer--;
    }
    return answer;
}

/*
효율성 제로의 코드를 완성했다. 어차피 소수를 제외하고 다 들어갈텐데 이게 맞는지... 테스트는 통과 했지만 좀 아닌 거 같다.
합성수이기 때문에 배수가 될 수 있는 값들만 체크해서 진행했다.
*/


// https://school.programmers.co.kr/learn/courses/30/lessons/120922

function solution(M, N) {
    var answer = (M*N)-1;
    return answer;
}

/*
그냥 수학적 사고로 인식해서 해결했다 딱히 어떤 공식이나 프로그래밍을 이용하지 않았다.
*/


// https://school.programmers.co.kr/learn/courses/30/lessons/120887#

function solution(i, j, k) {
    let answer = 0;
    let arr = Array(j-i+1).fill().map((v,index)=>(index+i).toString());
    for(let n=0;n<arr.length;n++) {
        answer += arr[n].split('').filter(v=>v===String(k)).length
    }
    return answer;
}

/*
숫자가 있는지 판별하는 건데 너무 많은 걸 쓴 것 같다. 시간적 소요시간이 너무 많고 배열을 하나 만들어서 숫자들을 집어 넣은뒤 또 그 숫자들을
하나씩 꺼내서 배열화 시켜 찾아내는 방식인데 비효율적이고 주먹구구식인 것 같았다.
*/
function solution(i, j, k) {
    return Array(j-i+1).fill(i).map((v,i)=>v+i).join('').split(k).length-1;
}
/*
배열을 만드는 것 까진 같고 그 뒤로 join으로 문자열 다시 split을 통해 해당하는k의 값으로 문자열을 구분해 냈다.
소요시간도 훨씬 덜 들었다.
*/

