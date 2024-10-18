import sys

target=[[1,0],[1,-1],[1,1]]
  
def dfs(x,y,value,last):
  if(x==n-1):
    answer.append(value)
    return
  for pos in target:
    nextX = x + pos[0]
    nextY = y + pos[1]
    if(0<=nextX<n and 0<=nextY<m and last!=pos[1]):
      dfs(nextX,nextY,value+arr[nextX][nextY],pos[1])

n,m = map(int,sys.stdin.readline().strip().split())
arr=[]
answer=[]
for i in range(n):
  arr.append(list(map(int,sys.stdin.readline().strip().split())))

for i in range(m):
  dfs(0,i,arr[0][i],100)

print(min(answer))
  
