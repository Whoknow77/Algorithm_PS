# import sys

# n=int(sys.stdin.readline())
# m=int(sys.stdin.readline())
# pos=list(map(int,sys.stdin.readline().split()))

# if len(pos)==1:
#   height = max(pos[0], n - pos[0])

# else:
#   height = pos[0]
#   for i in range(1,len(pos)):
#     if (i==len(pos)-1):
#       tmp = n - pos[-1]
#     else:
#       a = pos[i+1] - pos[i]
#       if(a%2):
#         tmp = a//2 + 1 
#       else:
#         tmp = a//2
#     height = max(height,tmp)

# print(height)


# 이분탐색 풀이
import sys
n=int(sys.stdin.readline())
m=int(sys.stdin.readline())
pos=list(map(int,sys.stdin.readline().split()))
start = 1
end = n 
result = 1

def canLight(h):
  prev = 0
  for s in pos:
    if(s-h<=prev):
      prev=s+h
    else:
      return False
  return prev>=n

while(start<=end):
  mid = (start + end) // 2
  if canLight(mid):
    end = mid -1
    result = mid
  else:
    start = mid +1

print(result)

