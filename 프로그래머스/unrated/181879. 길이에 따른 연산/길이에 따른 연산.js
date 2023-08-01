function solution(num_list) {
    return num_list.length>=11?num_list.reduce((acc,cur)=>acc+cur):num_list.reduce((acc,cur)=>acc*cur);
}