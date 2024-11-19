T=int(input())
for i in range(1,T+1):
  [n,k] = list(map(int,input().split()))
  arr = list(map(int,input().split()))
  cnt=0
  sameCount=0
  flag=False
  for j in range(0,n-1):
    if(arr[j]==arr[j+1]):
      sameCount+=1
  while(cnt<n):
    if(sameCount==n-1):
      print(f'#{i} {cnt}')
      flag=True
      break
    else:
      next=arr[k-1]
      if(arr[n-1]==next):
        sameCount+=1 
      arr.pop(0)
      arr.append(next)
      cnt+=1  
  if(flag==False):
    print(f'#{i} {-1}')
