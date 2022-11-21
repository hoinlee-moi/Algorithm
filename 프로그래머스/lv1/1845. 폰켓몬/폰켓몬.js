function solution(nums) {
    const set = new Set(nums)
    const newNums = [...set]
    if(newNums.length<nums.length/2) return newNums.length
    else if(newNums.length>=nums.length/2) return nums.length/2
}

/*
가장 많은 종류라 했으니 중복제거를 위해 Set을 사용했다. set.size가 있는지 몰라 array로 형변화 해서 length길이를 통해 계산 했는데 set.size를 써도 충분할 것 같다.
많은 종류이기 때문에 중복제거를 했고 그 값(포켓몬 종류 수)이 가져야할 총 값(nums/2)보다 크면 총 값까지만 리턴하고 아닐경우 중복제거한 값 그대로 리턴하도록 했다.
*/