# range in python

# range function return a sequence of numbers, starting from 0 by default, and increament by 1 (by default), and stops before a specified number.

# range( start ? , Stop , setp ?)

for i in range(5):  # range(stop) at 4
    print(i)

print("LOOP END\n")

for el in range(2,10):  # range(start , stop) 2,10
    print(el)

print("LOOP END\n")

for el in range(2,10,2):  # range(start , stop, step ) 2,10,2
    print(el)

print("LOOP END\n")


# even or odd number

for i in range(1,100,2):
    print(i)