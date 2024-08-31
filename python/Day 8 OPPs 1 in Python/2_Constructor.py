
#  __init__ Function ( Constructor )

# all classes have a function called __init__() , which is always exucuted when object is being initiated.


# Class & objects in python
print("Class & objects")

class Student:
    def __init__(self,name):
     self.name = name
     print("adding new student in database...")

s1 = Student("ayaz")
print(s1.name)
s2 = Student("fasi")
print(s2.name)
print()
#its a self involked by automaticully

#the SELF parameters is a reference to the current instance of the class , and is uesd to access vairiables that belongs to the class.


# Marvel hero's Class
class Hero:
   collage_name = "ABC university"  #its a class attribute

   def __init__(self , name , marks):  #constructor &  with constructor Parameters
      self.name = name                 #obj attribute >class attribute
      self.marks = marks
      print("marvel heres ...")

hero1 = Hero("ironman",78)
print(hero1.name , hero1.marks)
hero2 = Hero("batman",99)
print(hero2.name, hero2.marks)

print(hero2.collage_name)