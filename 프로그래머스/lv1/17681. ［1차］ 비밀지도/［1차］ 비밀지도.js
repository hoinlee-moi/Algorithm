function solution(n, arr1, arr2) {
    const secretMap1 = arr1.map(v=>v.toString(2).padStart(n,'0'))
    const secretMap2 = arr2.map(v=>v.toString(2).padStart(n,'0'))
    const answer = secretMap1.map((v,i) => {
        let password = ""
        for(let j=0; j<n; j++) { 
            if(v[j]==='0' && secretMap2[i][j]==='0') password+=" "
            else password += "#"
        }
        return password
    })
    return answer;
}