import sys
memo = set()

n,m = map(int,sys.stdin.readline().strip().split(' '))
for i in range (n):
  memo.add(sys.stdin.readline().strip())


for i in range(m):
  str_list=list(sys.stdin.readline().strip().split(','))
  for str_value in str_list:
    if (str_value in memo):
      memo.remove(str_value)
  print(len(memo))
