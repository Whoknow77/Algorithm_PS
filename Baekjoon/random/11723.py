# # 비트 마스킹 풀이
# import sys

# n=int(sys.stdin.readline())
# S=0
# for _ in range (n):
#   target=sys.stdin.readline().rstrip().split()
#   if(target[0]=="empty"):
#     S=0
#   elif(target[0]=="all"):
#     S = (1<<21)-1
#   else:
#     num=int(target[1])-1
#     if(target[0]=="add"):
#       S=S | (1 << num)
#     elif(target[0]=="remove"):
#       S = S & ~(1<<num)
#     elif(target[0]=="check"):
#       tmp = S&(1<<num)
#       if(tmp==0):
#         print(0)
#       else:
#         print(1)
#     elif(target[0]=="toggle"):
#       S = S ^ (1<<num)


# set 풀이
    
import sys
n=int(sys.stdin.readline())
arr=set()
for _ in range (n):
  target = sys.stdin.readline().split()
  if(target[0]=="empty"):
    arr=set()
  elif(target[0]=="all"):
    arr=set([i for i in range(1,21)])
  else:
    op = target[0]
    num = int(target[1])
    if(op=="add"):
      arr.add(num)
    elif(op=="remove"):
      if num in arr:
        arr.discard(num)
    elif(op=="check"):
      if num in arr:
        print(1)
      else:
        print(0)
    elif(op=="toggle"):
      if num in arr:
        arr.discard(num)
      else:
        arr.add(num)
  

# 파이썬에서 딕셔너리와 집합이아닌 배열의 remove는 O(n)
