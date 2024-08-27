#wap to enter makrs of 3 subjects from the user and store them in a Dictionary. start with an empty Dictionary & add one by one . use subject name as a key & amkrs as value,


subject = {}

x = int(input("urdu : "))
y = int(input("English : "))
z = int(input("math : "))

subject = {
    "urdu": x,
    "english": y,
    "math": z,
}

print(type(subject)) #type

print(subject)

print(len(subject))
a = (x+y+z) / len(subject)

print(a)


# 2nd way

# subject = {}
# subject = {
#     "urdu": input("urdu : "),
#     "english": input("English : "),
#     "math": input("math : ")
# }

# print(type(subject)) #type

# print(subject)

# 3rd way to add 
marks = {}
x = int(input("phy : "))
marks.update({"phy": x})
y = int(input("English : "))
marks.update({"English": y})

z = int(input("math : "))
marks.update({"math": z})
print(marks)