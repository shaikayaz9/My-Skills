# write a recursive function to calculate the sum of frist n natural number
#  wite a recursive function to print all elements in a list. like use list & index as parameters

# Q 1


def sum(n):
    if(n == 0):
        return 0
    return sum(n-1)+n
s = sum(5)
print(s)


# Q 2

def print_list(list ,idx=0):
    if(idx == len(list)):
        return
    print(list[idx])
    print_list(list , idx +1)

fruits = [ "apple", "mango" , "banana" ,"cherry"]

print_list(fruits)