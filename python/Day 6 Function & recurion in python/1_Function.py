# function in python

#block of Statement that perform a specific task.
# Def = function defination

print("FUNCTIONS IN PYTHON")

def sum(a,b):
 return a+b
 
def mul(a,b):
 return a*b

def div(a,b):
 return a / b

def min(a,b):
 return a - b

# a = int(input("Enter a : "))
# b = int(input("Enter b : "))

a = 40
b = 2

print("mul : ",mul(a,b))
print("sum : ",sum(a,b))
print("min : ",min(a,b))
print("div : ",div(a,b))

print("")

def calc_Sum(x,y):
 return x+y

summ = calc_Sum(45,5)
print(summ)

# here i am using a f-String + funtion argumnets in this functions

def Hello(user):
  print(f"hello ! {user}")
  return user

Hello("ayaz")
Hello("ayaz")
Hello("ayaz")
Hello("ayaz")


# print normal string

def hi():
 print("hi friends !")

hi()


# avareage of 3 numbers

def avg(a,b,c):
 sum = a+ b+ c
 avg = sum / 3
 return avg

p = avg(90,90,90)
print(p)
print(avg(8,9,5))



# defualt parameters

def d(a=10,b=9):
 return a*b


print(d(5,2))