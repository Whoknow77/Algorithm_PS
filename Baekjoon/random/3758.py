import sys
t = int(sys.stdin.readline())
# 팀 id, 문제 번호, 점수
answer=[]
for test_case in range(t):
  team_length,quiz_length,my_team_id,log_length =map(int,sys.stdin.readline().split())
  total={}
  for i in range(1,team_length+1):  
    total[i]={
      "submit_count":0,
    }
    for j in range(1,quiz_length+1):
      total[i][j]=[0]   
    
  for i in range(log_length):
    team_id, quiz_num, score =map(int,sys.stdin.readline().split())
    if(total[team_id][quiz_num][0] < score):
      total[team_id][quiz_num][0]=score
    total[team_id]["submit_count"]+=1
    total[team_id]["count"]=i
    
  arr=[]
  for key,value in total.items():
    sum_value=0
    for sc in range(1,quiz_length+1):
      sum_value+=value[sc][0]
    arr.append([key,sum_value,value["submit_count"],value["count"]])

  arr.sort(key=lambda x: (-x[1],x[2],x[3]))

  for i in range(len(arr)):
    if(arr[i][0]==my_team_id):
      answer.append(i+1)
      break

for num in answer:
  print(num)


# 다른 풀이(이차원 배열)
