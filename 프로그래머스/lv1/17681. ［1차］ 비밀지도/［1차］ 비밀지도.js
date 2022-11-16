// function solution(n, arr1, arr2) {
//     const secretMap1 = arr1.map(v=>v.toString(2).padStart(n,'0'))
//     const secretMap2 = arr2.map(v=>v.toString(2).padStart(n,'0'))
//     const answer = secretMap1.map((v,i) => {
//         let password = ""
//         for(let j=0; j<n; j++) { 
//             if(v[j]==='0' && secretMap2[i][j]==='0') password+=" "
//             else password += "#"
//         }
//         return password
//     })
//     return answer;
// }
let solution=(n,a,b)=>a.map((a,i)=>(a|b[i]).toString(2).padStart(n,0).replace(/0/g,' ').replace(/1/g,'#'))


/*
나는 비트 연산자를 모르기 때문에 전부 변형 시킨후 비교해 가며 집어넣었는데 굳이 그럴 필요가 없었다.

let solution=(n,a,b)=>a.map((a,i)=>(a|b[i]).toString(2).padStart(n,0).replace(/0/g,' ').replace(/1/g,'#'))

위 식을 보면 먼저 a배열에 map을 이용하고 i인덱스가 있으니 a와 b[i]를 비트 or연산자인 | 를 이용해 계산한다.
|는 하나 또는 둘 모두의 해당 비트가 1인 각 비트 위치에서 1을 반환한다.(32비트이며 32비트보다 크면 머리부분이 버려짐)
|를 이용해 두 수의 2진법 변환시 합쳐지는 값(10진법)이 나오고 toString으로 2진법으로 변환히거 padStart를 통해 n길이만큼 앞쪽에 0을 채워줍니다.
이후 replace를 이용하여 0인 부분은 전부 공백으로 1인 부분은 #으로 출력되게 만듭니다.
map을 이용하였으니 암호가 해결된 새로운 배열을 출력합니다.
*/