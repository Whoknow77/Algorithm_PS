import sys
p, m = map(int,sys.stdin.readline().split(' '))
room=[]
for i in range(p):
  level, nickname = sys.stdin.readline().strip().split(' ')
  if(len(room)==0):
    room.append([[int(level),nickname]])
  else:
    flag=False
    for j in range (len(room)):
      curRoom = room[j]
      if(len(curRoom)<m and curRoom[0][0]-10 <= int(level) <=curRoom[0][0]+10):
        room[j].append([int(level),nickname])
        flag=True
        break
    if(flag==False):
      room.append([[int(level),nickname]])

for r in room:
  r.sort(key=lambda x:x[1])

for r in room:
  if(len(r)==m):
    print("Started!")
  else:
    print("Waiting!")
  for level,alpha in r:
    print(level, alpha)

      