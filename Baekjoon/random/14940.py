d=[[1,0],[-1,0],[0,1],[0,-1]]

import sys
n,m =map(int,sys.stdin.readline().strip().split())
tmp = [[0 for i in range(m)] for i in range(n)]
visited = [[0 for i in range(m)] for i in range(n)]

arr=[]
start=[0,0]
for i in range(n):
  sub_arr=list(map(int,sys.stdin.readline().strip().split()))
  arr.append(sub_arr)
  if(2 in sub_arr):
    for j in range(m):
      if(sub_arr[j]==2):
        start[0]=i
        start[1]=j
        break

def bfs(x,y,cnt):
  queue=[[x,y,cnt]]
  while(len(queue)>0):
    curX,curY,curCount = queue.pop(0)
    tmp[curX][curY]=curCount
    for dx,dy in d:
      nextX = curX+dx
      nextY= curY+dy
      if(0<=nextX<n and 0<=nextY<m and arr[nextX][nextY]==1 and visited[nextX][nextY]==0):
        visited[nextX][nextY]=1
        queue.append([nextX,nextY,curCount+1])


for i in range(n):
  for j in range(m):
    if(visited[i][j]==0 and arr[i][j]==1):
      tmp[i][j]=-1

visited[start[0]][start[1]]=1
bfs(start[0],start[1],0)


for i in range(n):
  print(*tmp[i])

