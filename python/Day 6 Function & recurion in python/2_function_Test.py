# waf to print the lenth of list .(list is the parameters)
# waf to print the elements of a list in a single line (list is the parameters)
# waf to find the factorial of n (n is the parameters)
# waf to convert USD to INR

# Q1

list1 = ["delhi","mumbai","hydrabad","pune","noide","banglore"]
heros = ["batman", "ironman","thor","superman"]

def city_len(a):
    print(len(a))

city_len(list1)
city_len(heros)


# Q 2

def string_len(a):
    for i in a:
        print(i , end=" ")

string_len(heros)
print()

# Q 3 

def facto(n):
    fact = 1
    for i in range(1, n+1):
        fact *=i
    print(fact)

facto(6)

# Q 4

def Conv(usd):
    inr = usd *83
    print(usd,"USD =",inr, "INR" )

Conv(170)

#Even and odd

def Even_odd(num):
    if(num %2 == 0):
        print(num ," is EVEN")
    else:
        print(num, "is ODD")

Even_odd(4650)