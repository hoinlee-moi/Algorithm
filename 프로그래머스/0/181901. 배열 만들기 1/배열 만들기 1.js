const solution = (n, k) => 
     Array.from({length:~~(n/k)},(_,i)=>(i+1)*k);
