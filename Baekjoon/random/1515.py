import sys
nums = sys.stdin.readline().strip()
n=0 # 1부터 n까지 증가하는 정수
idx=0 # 현재 탐색중인 인덱스
while True:
  n+=1
  for s in str(n):
    if(nums[idx]==s):
      idx+=1
      if(idx==len(nums)):
        print(n)
        exit()

