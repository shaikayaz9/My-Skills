#conditional Stetement's
 # if age < 18 junior student =  jr
 # if age > 18 2nd year student = md
 # if age > 60 senior = sr
 # if age -10 or somthing = not valid

age = int(input("Enter age : "))
if(age<18 and age>0):
    print("jr")
elif(age>60):
    print("sr")
elif(age>18 and age<= 59):
    print("md")
else:
    print("not valid age")

print(type(age))