import sys
n = int(sys.stdin.readline())
arr=[]
for _ in range(n):
  arr.append(list(sys.stdin.readline().strip()))

for i in range(1,n-1):
  for j in range(1,n-1):
    if(arr[i][j]=="*" and arr[i-1][j]=="*" and arr[i+1][j]=="*" and arr[i][j-1]=="*" and arr[i][j+1]=="*"):
      start=[i,j]

hurry=0
left_arm=0
right_arm=0
left_leg=0
right_leg=0


for i in range(start[1]):
  if(arr[start[0]][i]=="*"):
    left_arm+=1

for i in range(start[1]+1,n):
  if(arr[start[0]][i]=="*"):
    right_arm+=1

for i in range(start[0]+1,n):
  if(arr[i][start[1]]=="_"):
    hurry_end=[i,start[1]]
    break
  else:
    hurry+=1


for i in range(hurry_end[0],n):
  if(arr[i][hurry_end[1]-1]=="*"):
    left_leg+=1
  if(arr[i][hurry_end[1]+1] =="*"):
    right_leg+=1
print(f'{start[0]+1} {start[1]+1}')
print(f'{left_arm} {right_arm} {hurry} {left_leg} {right_leg}')
