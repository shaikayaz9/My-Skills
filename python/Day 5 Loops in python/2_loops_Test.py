#lets Practice 

# 1 print number from 1 to 100
# 2 print numbers from 100 to 1
# 3 print the multiplication table of a number
# 4 print the elements of the following list using loops
# 5 search fora number x in this tuple using loops


# 1

i = 1
while(i<=100):
    print(i)
    i += 1

print("Q1 END here")

# 2nd question

j = 100
while(j>=1):
    print(j)
    j-=1

print("Q2 END here")

# 3rd question 
# adding a data into list by loops

n = 2
list2 = []
while(n <= 10):
    print("hi",n *n)
    list2.append(n*n)
    n += 1
print(list2)

print("Q3 END here")


# 4rt Question

nums = [1,4,9,16,25,36,49,65,81,100]
idx = 0
while(idx < len(nums)):
    print(nums[idx])
    idx +=1

print("Q4 End here")



# 5th Question

tup1 = (1,4,9,16,25,36,49,65,81,100)
i = 1
k = 49
while(i < len(tup1)):
    if(tup1[i] == k):
        print("Found them at", i) 
    i +=1

print("Q5 End here\n")

print("Break key word")



# break : used to terminate the loops when encounterd

y = 1
while(y < 10):
    print(y)
    if(y ==6):
        break
    y += 1

print("Loop End\n")


# Continue : Terminates execution in the cuurent itreation & continue execution of the loop with the next iteration.
print("Continue key word")
z = 1
while(z <= 10):
    if(z == 7):
        z += 1
        continue
    print(z)
    z +=1


#wap to find the sum of frist n mumber .
print("sum")

n = 5
sum = 0
a = 1
while a <= 5:
    sum +=a
    a +=1

print(sum)