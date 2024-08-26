#WAP to check if a lsit containe's a (Palindrome ) of elements, (HIND: use Copy()METHOD)

list1 = [1,2,1,"p"] #remove P in list then check your answer

Copy_list1 = list1.copy()
Copy_list1.reverse()

if(Copy_list1 == list1):
    print("Palindrome")
else:
    print("not")

print(Copy_list1)