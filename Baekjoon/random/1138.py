import sys

n =int(sys.stdin.readline().strip())
tmp=[0] * n
nums = list(map(int,sys.stdin.readline().strip().split()))

for i in range(n):
  cnt = 0
  for j in range(n):
    if(tmp[j]==0):
      if(cnt<nums[i]):
        cnt+=1
      elif(cnt==nums[i]):
        tmp[j]=i+1
        break

print(*tmp)
