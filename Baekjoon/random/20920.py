import sys
n,m=map(int,sys.stdin.readline().split())
wordSet={}
for _ in range(n):
  word = sys.stdin.readline().strip()
  if(len(word)>=m):
    if(wordSet.get(word)==None):
      wordSet[word]=[word,1,len(word)]
    else:
      wordSet[word][1]+=1

wordArr=[]
for key,values in wordSet.items():
  wordArr.append(values)

wordArr.sort(key=lambda x:(-x[1],-x[2],x[0]))
for w in wordArr:
  print(w[0])


