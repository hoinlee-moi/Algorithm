function solution(num_list) {
    return (num_list.reduce((acc,cur)=>acc+cur))**2>num_list.reduce((acc,cur)=>acc*cur)?1:0;
}