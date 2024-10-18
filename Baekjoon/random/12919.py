import sys


def dfs(str):
  print(str)
  if(str==start):
    print(1)
    sys.exit()
  if(len(str)==0):
    return 0
  if str[-1] == 'A':
    dfs(str[:-1])
  if(str[0]=='B'):
    dfs(str[1:][::-1])
  
start = sys.stdin.readline().strip()
end = sys.stdin.readline().strip()

dfs(end)
print(0)

