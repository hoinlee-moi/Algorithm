function solution(park, routes) {
    let height;
    let width;
    for(let i=0; i<=park.length-1;i++) {
        if(park[i].includes("S")){
            height = i
            width = park[i].indexOf("S")
            let str = park[i].replace("S","O")
            park[i] = str
            break;
        }
    }
    for(let i=0; i<=routes.length-1; i++){
        const dir = routes[i][0]
        const dis = Number(routes[i][2]) 
        switch(dir){
            case "N":{
                if(!park[height-dis])continue;
                for(let j=1;j<=dis;j++){
                    if(park[height-j][width]==="X") break;
                    if(j===dis) height-=dis
                }
                break;}
            case "S":{
                if(!park[height+dis])continue;
                for(let j=1;j<=dis;j++){
                    if(park[height+j][width]==="X") break;
                    if(j===dis) height+=dis
                }
                break;}
            case "W": {
                if(!park[height][width-dis]) continue;
                let westLoc = park[height].substr(width-dis,dis)
                if(westLoc.includes("X")) break;
                else width -= dis
                break;}
            case "E": {
                if(!park[height][width+dis])continue;
                let eastLoc = park[height].substr(width+1,dis)
                if(eastLoc.includes("X")) break;
                else width += dis
                break;}
        }
    }

    return [height,width];
}