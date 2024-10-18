# 왼쪽부터 햄버거 기준으로 오른쪽으로 최대한 K만큼 멀리 떨어져있는걸 고르자.

import sys
n,k=map(int,sys.stdin.readline().strip().split())
pos = list(sys.stdin.readline())
ate = [0] * (n+1)

answer=0
for i in range(n+1):
  if(pos[i]=="H"):
    count=0
    for j in range(i-k,i+1+k):
      # 사람이고, 범위를 벗어나지 않고, 방문하지 않은 경우
      if(j>=0 and j < n and ate[j]==0 and pos[j]=="P"):
        ate[j]=1
        break

for k in ate:
  if(k==1):
    answer+=1
print(answer)
# H H P H P P H H P P
