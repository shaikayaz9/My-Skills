print("Lists in Python")

#A built-in data type that stores set of values
#it can store elements of different types (integer ,float, string,etc)
#its just like other programing Language we called ARRY's

marks = [ 99, 67,45,68,69,34] #example of List
print(marks) #print
print(type(marks)) #check type of arry

#index in list

# marks[0]
print(marks[0])  #99
print(marks[1])  #67

#length of list
print(len(marks)) #6


# we are changing the list data /list are mutable
print(marks)   #[99, 67, 45, 68, 69, 34]
marks[2] = "ayaz"
print(marks)   #[99, 67, 'ayaz', 68, 69, 34]

#we can add other data types in 1 list
# rondomlist = ["ayaz", 89, 9.00, True]
# print(rondomlist)


#list Slising
#similer to string slicing

 #list_name [ Starting_idx : ending_idx] #ending idx is not included

marks2 = [87,64,37,95,76]

print(marks2)                  #[87, 64, 37, 95, 76]
print(marks2[1:4])             #[64, 37, 95]
print(marks2[:4])             #[87, 64, 37, 95]
print(marks2[1: len(marks2)]) #[64, 37, 95, 76]
print(marks2[-4:-1])          #[64, 37, 95]