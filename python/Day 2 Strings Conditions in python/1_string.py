# Strings is data type that store a sequence of Characters.

#basic operation's
# 1 Concatention
# 2 length of str 
# 3 indexing 
# 4 slicing 

#3 type to write a string in python 
str1 = 'ayaz shaik.'
str2 = "ayaz shaik."
str3 = '''ayaz shaik.'''

print(str1)
print(str2)
print(str3)


# 1 Concatention 
  #("HELLO" + "WORLD"  => "HELLOWORLDS")
a,b = "ayaz", "shaik"
str4 = a + " " + b
print(str4)

# 2 length of str
  #we are using (len(variable)) property
print(len(str1))
print(len(str2))
print(len(str3))
print(len(str4))


# 3 indexing 

strr = "apna collage"
#strr[0] = a , strr[6] = c
print(len(strr), strr[4])

# 4 slicing 
#accessing parts of a string

#strr[ Straing_idx : ending_idx] #Ending idx is not Included
#strr = apna collage
print(strr[0:4])  #apna
print(strr[5:])   #collage
print(strr[2 :len(strr)]) #na collage


# 5 negative slicing

strr5 = "APPLE"

print(strr5[-3:-1])  #PL
print(strr5[-5:-3])  #AP