function solution(num_list) {
    const last = num_list.at(-1)
    const lastBefore = num_list.at(-2)
    return  last>lastBefore?num_list.push(last-lastBefore):num_list.push(last*2),num_list
}