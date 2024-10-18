import sys
n=int(sys.stdin.readline())
data =list(map(int,sys.stdin.readline().split()))
m=int(sys.stdin.readline())
data.sort()
left = 0
right = data[-1]

def total_sum(mid):
  sum=0
  for i in data:
    if(i>mid):
      sum+=mid
    else:
      sum+=i
  return sum

while(left<=right):
  mid=(left+right)//2
  if(total_sum(mid)==m):
    answer=mid
    break
  elif(total_sum(mid)>m):
    right = mid-1
  else:
    left = mid+1
    answer=mid

print(answer)



# 4
# 120 80 70 90
# 120

# left을 data[0]으로 잡으면 안됨. 예산이 그보다 작은 경우가 있음
