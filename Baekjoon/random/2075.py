from heapq import heappush, heappop
import sys

n = int(sys.stdin.readline())
heap=[]
for i in range (n):
  numbers = map(int,sys.stdin.readline().split(' '))
  for number in numbers:
    if(len(heap)<n):
      heappush(heap,number)
    else:
      if(heap[0]<number):
        heappop(heap)
        heappush(heap,number)

print(heap[0])
