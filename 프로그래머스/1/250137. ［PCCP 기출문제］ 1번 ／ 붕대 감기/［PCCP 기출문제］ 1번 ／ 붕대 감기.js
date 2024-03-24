function solution(bandage, health, attacks) {
    let curHealth = health;
    let second = 1;
    for(let i=0; i<=attacks.length-1; i++){
        const v = attacks[i]
        const during = (v[0]-second)-1<0?0:(v[0]-second)-1
        curHealth += during*bandage[1];
        curHealth += Math.floor(during/bandage[0])*bandage[2];
        second = v[0]     
        if(curHealth>health) curHealth=health;
        curHealth-=v[1]
        if(curHealth<=0) return -1
    }
    return curHealth
}