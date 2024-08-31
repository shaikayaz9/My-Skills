# craete account class with 2 attribute - balance & account no. 
# create methods for debit , credit & printing the balance.



class Account:
    def __init__(self , bal , acc):
        self.bal = bal
        self.acc = acc
    
    #debit method
    def debit(self , amount):
        self.amount -= amount
        print("RS." , amount , "was debited" )

    #credit method
    def credit(self, amount):
        self.amount += amount
        print("RS." , amount , "was credited" )





acc1 = Account(50000, 12345)
print( acc1.bal,  acc1.acc)

ayaz = Account()

