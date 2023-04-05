function solution(k, dungeons) {
  const visited = new Array(dungeons.length).fill(false);
  let maxCnt = 0;

  function dfs(curK, curCnt) {
    if (curK < 0) return;
    maxCnt = Math.max(maxCnt, curCnt);
    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && curK >= dungeons[i][0]) {
        visited[i] = true;
        dfs(curK - dungeons[i][1], curCnt + 1);
        visited[i] = false;
      }
    }
  }

  dfs(k, 0);
  return maxCnt;
}