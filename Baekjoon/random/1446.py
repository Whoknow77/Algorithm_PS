n,d = map(int,(input().split()))
shortcuts=[]
dp=[i for i in range(d+1)]
for _ in range(n):
  start,des,length = map(int,input().split())
  shortcuts.append((start,des,length))

shortcuts.sort()

for i in range(d+1):
  dp[i]=min(dp[i-1]+1,dp[i])
  for start,des,length in shortcuts:
    if i==start and des<=d and dp[i]+length < dp[des]:
      dp[des] = dp[start]+length
print(dp[d])



