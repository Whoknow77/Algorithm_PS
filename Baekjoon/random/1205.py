# import sys
# n,new_score,p = map(int,sys.stdin.readline().split())
# if(n>0):
#   arr = list(map(int,sys.stdin.readline().split()))
# else:
#   arr=[]

# count=1
# fcount=0
# for score in arr:
#   if(new_score<=score):
#     count+=1
#   if(new_score==score):
#     fcount+=1

# if(count>p):
#   print(-1)
# else:
#   print(count-fcount)

n, score, p = map(int, input().split())

if n == 0:
  print(1)
else:
  rank = list(map(int, input().split()))

  if n == p and rank[-1] >= score:
    print(-1)
  else:
    result = n+1
    for i in range(n):
      if rank[i] <= score:
        result = i+1
        break
    print(result)
