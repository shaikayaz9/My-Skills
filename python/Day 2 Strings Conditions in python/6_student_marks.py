marks = int(input("Enter your marks (0 - 100) : "))

if(marks >= 90 and marks <=100):
    print("A")
elif(marks >=80 and marks <=89):
    print("B")
elif(marks >= 70 and marks <= 79):12
    print("C")
elif(marks >= 60 and marks <= 69):
    print("D")
elif(marks >=36 and marks <=59):
    print("E")
elif(marks >100):
    print("not valid marks")
elif(marks <= 0):
    print("not valid mimimum marks")
else:
    print("F")

print(marks)
print("Code End")