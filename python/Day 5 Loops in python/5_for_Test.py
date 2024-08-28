# print the elements of the Following loops

nums = [1,4,9,16,25,36,49,65,81,100]

for i in nums:
    print(i)

# print for a number x in this  tuple using loops. 
print("\n")
n = (1,4,9,16,25,36,49,65,81,100)
x = 49
for i in n:
    if(i == x):
        print("found the number at ",i)
        break
    print(i)