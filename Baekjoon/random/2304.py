m=0
m_idx=0
arr=[0 for _ in range(1001)]
for _ in range(int(input())):
  idx,height = map(int,input().split())
  arr[idx]=height
  if m < height:
    m_idx=idx
    m=height
cur=0
answer=0

for i in range(m_idx+1):
  cur=max(cur,arr[i])
  answer+=cur
cur=0

for i in range(1000,m_idx,-1):
  cur=max(cur,arr[i])
  answer+=cur
print(answer)
