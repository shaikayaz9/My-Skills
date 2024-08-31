# Abstraction 

#hide unnecceasarry thing
#hiding the implementation deteails of a class and onlu showing the essentail feature to the user.

class Car:
    def __init__(self):
        self.acc = False
        self.brk = False
        self.cluth = False

    def start(self):
        self.cluth = True
        self.acc = True
        print("Car starded ....")

car1 = Car()
car1.start()