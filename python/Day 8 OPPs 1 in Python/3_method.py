#method

#method are function that belog to a objects


class Student:
    def __init__(self,name , marks):
        self.name = name
        self.marks = marks

    def hello(self):
        print("hello", self.name)

    def mm(self):
        print(self.marks)


s1 = Student("ayaz",89)
s1.hello()
s1.mm()
print()
# print(s1.name, s1.marks)


s2 = Student("sadiq",70)
s2.hello()
s2.mm()