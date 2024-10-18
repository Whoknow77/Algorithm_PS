import sys
n = int(sys.stdin.readline().strip())
s=sys.stdin.readline().strip()

def move_balls(type_of_ball_to_move,s):
    s=s.lstrip(type_of_ball_to_move)
    return s.count(type_of_ball_to_move)

print(min(
    move_balls("R",s),
    move_balls("R",s[::-1]),
    move_balls("B",s),
    move_balls("B",s[::-1])))

answer="BBBRR"
answer=answer.lstrip("R")
