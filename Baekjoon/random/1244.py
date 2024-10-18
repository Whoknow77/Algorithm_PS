import sys
import math
n=int(sys.stdin.readline())
data = list(map(int,sys.stdin.readline().strip().split()))
stu_num = int(sys.stdin.readline())
for _ in range(stu_num):
  gender,start = map(int,sys.stdin.readline().strip().split())
  # 남학생
  if(gender==1):
    for i in range(start-1,n,start):
      if(data[i]==1):
        data[i]=0
      else:
        data[i]=1
  elif(gender==2):
    if(data[start-1]==0):
      data[start-1]=1
    else:
      data[start-1]=0
    for j in range(1,math.ceil(n)):
      if(start-j-1 <0 or start+j-1 >=n):
        break
      if(data[start-j-1] == data[start+j-1]):
        if(data[start-j-1]==0):
          data[start-j-1]=1
          data[start+j-1]=1
        else:
          data[start-j-1]=0
          data[start+j-1]=0
      else:
        break

for i in range(0,n,20):
  print(' '.join(map(str,data[i:i+20])))

  



