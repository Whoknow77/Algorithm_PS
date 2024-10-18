import sys

num_value = list(map(int,sys.stdin.readline().strip()))

last_index = len(num_value)-1
count=0
zero_count= num_value.count(0)//2
one_count= num_value.count(1)//2
for i in range(len(num_value)):
  if(num_value[i]==1):
    num_value[i]=3
    count+=1
  if(one_count==count):
      break

count=0
for i in range(len(num_value)-1,-1,-1):
  if(num_value[i]==0):
    num_value[i]=3
    count+=1
  if(zero_count==count):
      break
  
answer=''
for num in num_value:
   if(num!=3):
      answer+=str(num)
print(answer)
  


# 앞에서 1 절반 없애기
# 뒤에서 0 절반 없애기
# 삭제->3

