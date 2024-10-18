# import sys

# # 개수가 같을 때 -> 구성이 같거나 바꿔서 같은 경우 -> 하나를 잡고 상대방꺼에 없는 경우가 1번 이하인 경우 
# # 개수가 하나 차이날 때 -> 한 문자를 더하거나 빼서 같은 경우 -> 작은거 기준으로 비교했을때 모두 긴쪽에 있는 경우 
# # 개수가 두개 이상 차이날 때 -> 불가능

# n = int(sys.stdin.readline())
# words=[]
# for _ in range(n):
#     words.append((sys.stdin.readline().strip()))

# answer=0
# for i in range(1,n):
#     cur_word = list(words[i])
#     first_word =list(words[0])
#     count=0
#     if(len(cur_word) == len(first_word)):
#         for ch in first_word:
#             if(ch in cur_word):
#                 cur_word.remove(ch)
#             else:
#                 count+=1
#         if(count<=1):
#             answer+=1                

#     elif(len(cur_word)-len(first_word)==1):
#         flag=True
#         for ch in first_word:
#             if(ch in cur_word):   
#                 cur_word.remove(ch)
#             else:
#                 flag=False
#                 break
#         if(flag==True):
#             answer+=1

#     elif(len(first_word)-len(cur_word)==1):
#         flag=True
#         for ch in cur_word:
#             if(ch in first_word):   
#                 first_word.remove(ch)
#             else:
#                 flag=False
#                 break
#         if(flag==True):
#             answer+=1        
        
# print(answer)


# 다른 풀이

# 개수 같을 때 -> cnt < 2
# 개수 하나 차이 일ㄷ 때 -> cnt < 2 and len(compare) < 2


N = int(input())
target = list(input()) # 비교 대상 단어(첫 단어)
answer = 0

for _ in range(N-1):
    compare = target[:] 
    word = input() # 새로운 단어
    cnt = 0

    for w in word:
        if w in compare:
            compare.remove(w)
        else:
            cnt += 1

    if cnt < 2 and len(compare) < 2:
        answer += 1

print(answer)
