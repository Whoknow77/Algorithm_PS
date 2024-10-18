import sys
# 옵션을 돌면서 -> 단어의 첫글자 알파벳 지정확인 -> 단어 지정확인 -> 단축키 중간중간에 지정

n = int(sys.stdin.readline())
option=set()

for i in range(n):
  words = list(sys.stdin.readline().strip().split(' '))

  for j in range(len(words)):
    word=words[j]
    if(word[0].lower() not in option):
      option.add(word[0].lower())
      words[j]=f"[{word[0]}]{word[1:]}"
      print(' '.join(words))
      break
  else:
      for j in range(len(words)):
        flag=False
        word=words[j]
        for k in range(len(word)):
          alpha = word[k]
          if(alpha.lower() not in option):
            option.add(word[k].lower())
            words[j]=f"{word[0:k]}[{word[k]}]{word[k+1:]}"
            flag=True
            print(' '.join(words))
            break
        if(flag==True):
          break
      else:
        print(*words)



