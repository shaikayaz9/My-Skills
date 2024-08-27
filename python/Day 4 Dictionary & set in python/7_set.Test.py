#figure out a way to store 9 & 9.0 as separtae values in the set. (your can take help of built-in data type)


set1 = {9,9.0}
print(set1) #its print only  {9}


set1 = {
    ("float",9.0),
    ("int",9)
}
print(set1)