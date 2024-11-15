import random
rNum = random.randint(1,100)
user = int(input("GUESE the number (1 - 100) : "))

def Quiz(user):
    while(user != rNum):
      if(user >rNum):
         print("dicrease the value",user)
      elif(user < rNum):
         print("incraase the value", user)
      user = int(input("Try again : "))
    print("Congratulation Bro ! you pass", rNum)


Quiz(user)

# you gained new knowledge in this small project

# 1 about String concat
# 2 loops
# 3 if elif
# 4 import
# 5 thinking 