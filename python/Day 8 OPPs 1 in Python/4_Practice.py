# create Student class that takes name & marks of 3 subjects as argumnets in Construstor.
# then create a method to print the avergae


class Student:
    def __init__(self, name ,marks):
        self.name = name
        self.marks = marks
    
    def avg(self):
        sum = 0
        for i in self.marks:
            sum +=i
        print("h1",self.name , "you have ", sum/3)
     


s1 = Student("ayaz",[ 40,45,90])
print(s1.name, s1.marks)
s1.avg()


s1.name = "ironman"

print(s1.name)