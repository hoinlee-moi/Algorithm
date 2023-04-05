from itertools import permutations as p
def solution(k, dungeons):
    m = 0
    l = len(dungeons)
    for o in p(range(l)):
        tk = k
        for n, i in enumerate(o):
            if tk < dungeons[i][0]:
                m = max(m, n)
                break
            tk -= dungeons[i][1]
        else:
            return l
    return m