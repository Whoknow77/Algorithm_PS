import sys

# 객체에 배열 형태로 넣기 -> 
# filter로 6개 보다 적으면 거르기 -> 
# 4명 합으로 내림차순 -> 
# 같으면 5번찌 선수기준으로 내림차순 -> 
# 첫번째요소가 답

real_answer=[]
t = int(sys.stdin.readline())
for _ in range(t):
  score={}
  answer={}
  n = int(sys.stdin.readline())
  arr = list(map(int,sys.stdin.readline().split()))
  rank=0
  for num in arr:
    if(score.get(num)==None):
      score[num]=[1]
    else:
      score[num].append(num)
  for num in arr:
    if(len(score[num])==6):
      rank+=1
      if(answer.get(num)==None):
        answer[num]=[rank]
      else:
        answer[num].append(rank)
  score_arr=[]
  for key,values in answer.items():
    score_arr.append([key,sum(values[0:4]),values[4]])
  score_arr.sort(key=lambda x: (x[1], x[2]))
  real_answer.append(str(score_arr[0][0]))

print('\n'.join(real_answer))
        
    
  



