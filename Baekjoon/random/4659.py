import sys

moeum=['a','u','o','i','e']
for _ in range(10000):
  test = sys.stdin.readline().strip()
  if(test=="end"):
    break
  else:
    flag=False
    mo_count=0
    ja_count=0
    count=0
    
    # 3개 연속
    for ch in test:
      if(ch in moeum):
        mo_count+=1
        count+=1
        ja_count=0
        if(mo_count==3):
          flag=True
          break
      else:
        ja_count+=1
        mo_count=0
        if(ja_count==3):
          flag=True
          break

    # 모음 하나
    if(count==0):
      flag=True

    # 2개
    for i in range(0,len(test)-1):
      if(test[i] == test[i+1] and test[i:i+2] != 'oo' and test[i:i+2]!="ee"):
        flag=True
        break

    if(flag==False):
      print(f'<{test}> is acceptable.')
    else:
      print(f'<{test}> is not acceptable.')
