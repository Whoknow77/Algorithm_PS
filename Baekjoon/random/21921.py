import sys
n,x = map(int,sys.stdin.readline().split())
date = list(map(int,sys.stdin.readline().strip().split()))

start=0
end=x-1
max_value=sum(date[start:x])
sum_value=sum(date[start:x])
arr=[sum_value]

while(True):
  sum_value-=date[start]
  start+=1
  end+=1
  if(end>=n):
    break
  sum_value+=date[end]
  if(max_value<=sum_value):
    arr.append(sum_value)
    max_value=sum_value

if(max_value==0):
  print("SAD")
else:
  count=0
  for i in arr:
    if(i==max_value):
      count+=1
  print(max_value)
  print(count)



