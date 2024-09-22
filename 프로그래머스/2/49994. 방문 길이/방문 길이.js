function solution(dirs) {
    const visited = new Set()
    let x = 0;
    let y = 0;
    
    for(const dir of dirs) {
        const [nx,ny] = move(x,y,dir)
        if(nx>= -5 && nx<= 5 && ny>= -5 && ny<=5) {
            visited.add(`${x}${y}${nx}${ny}`);;
            visited.add(`${nx}${ny}${x}${y}`);
            [x,y] = [nx,ny];
        }
    }
    return visited.size / 2;
}

function move (x,y,dir) {
switch(dir){
    case 'U':
        return [x,y+1];
    case 'D':
        return [x,y-1];
    case 'R':
        return [x+1,y];
    case 'L':
        return [x-1,y];
}    
}