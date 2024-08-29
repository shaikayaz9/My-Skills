# Recursion in python

# when a function calls itself repeatedly

# print n to 1 backwards


def show(n):
    if(n == 0):
        return
    print(n)
    show(n-1)


show(6)



# recursion retrun n !

def fact(n):
    if(n == 0 or n == 1):
        return 1
    else:
        return n * fact(n-1)
    

print(fact(5))
