from collections import deque
import sys

n,k = map(int,sys.stdin.readline().split())
limit=100001
time=[0]*limit

def bfs(x,y):
  q=deque()
  if(x==0):
    # 0이 들어오면 무조건 1부터시작해야함 안그러면 음수, 0반복 이므로 최소값이 아님
    q.append(1)
  else:
    q.append(x)

  while q:
    x = q.popleft()
    if(x==y):
      return time[x]
    
    for nx in (x-1, x+1, x*2):
      if 0<= nx < limit and time[nx]==0:
        if(nx==2*x):
          time[nx]=time[x]
          q.appendleft(nx)
        else:
          time[nx]=time[x]+1
          q.append(nx)

if(n==0):
  if(k==0):
    print(0)
  else:
    print(bfs(n,k)+1)

else:
  print(bfs(n,k))
