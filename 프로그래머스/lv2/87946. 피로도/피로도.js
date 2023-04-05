function solution(k, dungeons) {
    let ans = 0;

    function dfs(k, cnt, visited) {
        ans = Math.max(ans, cnt);
        for (let j = 0; j < dungeons.length; j++) {
            if (k >= dungeons[j][0] && !visited.has(j)) {
                visited.add(j);
                dfs(k - dungeons[j][1], cnt + 1, visited);
                visited.delete(j);
            }
        }
    }

    dfs(k, 0, new Set());
    return ans;
}