#OPPs in python 

# to map with real world scenarios, we started using objects in code
#this is called object oriented programming.

#we reduce redundancy & reuseability.


# Class & objects in python
print("Class & objects")

class Student:
    name = "shaik ayaz"

s1 = Student()

print(s1) #its return a Hascode
print(s1.name)
print(type(s1))

s2 = Student()

print(s2.name)
print()

# new class ( car factory) here we are craeting a new methods in objects

class Car:
    color = "blue"
    brand = "BMW"

customer1 = Car()
print(customer1.color)
print(customer1.brand)


#  __init__ Function ( Constructor )

# all classes have a function called __init__() , which is always exucuted when object is being initiated.


