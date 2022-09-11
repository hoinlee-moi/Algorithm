def solution(pos): 
  x = pos[0][0] ^ pos[1][0] ^ pos[2][0] 
  y = pos[0][1] ^ pos[1][1] ^ pos[2][1] 
  
  return [x,y]

#   비트연산자를 이용한 풀이
#   사각형 의 3점의 좌표가 주어지고 나머지 좌표 찾기