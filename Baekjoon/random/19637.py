import sys
n,m=map(int,sys.stdin.readline().strip().split(' '))

chingho=[]
for i in range (n):
  chingho.append(list((sys.stdin.readline().strip().split(' '))))


answer=[]


for i in range (m):
  fight_number = int(sys.stdin.readline().strip())
  left = 0
  right = n-1
  while(left<=right):
    mid = (left+right)//2
    if(fight_number>int(chingho[mid][1])):
      left=mid+1
    else:
      right=mid-1
  print(chingho[left][0])


