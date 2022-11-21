function solution(nums) {
    const set = new Set(nums)
    const newNums = [...set]
    if(newNums.length<nums.length/2) return newNums.length
    else if(newNums.length>=nums.length/2) return nums.length/2
}