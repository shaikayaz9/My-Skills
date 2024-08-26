#A built-in data type that lets us create immutable sequence of values.

tup = (87,68,33,95,79,33)
print(tup)
print( type(tup))
print(tup[0])
print(tup[1])

# TypeError: 'tuple' object does not support item assignment 
# tup[2] = 5
print(tup)

tub =(1,) #alwyas use (1,) comma in tuples for data type
print(tub, type(tub))



#we use SLICING like LIST
print(tup[1:4]) #[68,33,95]


#TUPLES METHOD

#tup.index(el) # return index of frist list
print("DEMO :", tup)
print(tup.index(95)) #find the idx value

#tup.count(el) #count total occurrences
print(tup.count(33)) #count