#Dictionary in Python

#dictionaries are used to store data values in key:value pairs
# they are unorderd ,mutable(CHANGEABLE) & dont allow dubilicate keys

dict1 = {
    "name": "ayaz",
    "age":23,
    "isFollow":True,
    "marks" :[98,70,46,24,64],
    "mark" :(98,70,46,24,64)
}

dict1["name"] = "fayaz" #to assign or add new
dict1["university"] = "DR abdul haq urdu university"  #add new data in Dict
print(dict1)   #print data
print(len(dict1))  #length of data
print(type(dict1))  #type of data
print(type(dict1["marks"]) )
print(type(dict1["mark"]) )


#we can create empty dict

null_dict = {}
print(type(null_dict))

#add new data 

null_dict["fName"] = "SHAIK AYAZ"
print(null_dict)

# Nested Dictionary

Student = {
    "name":"ayaz",
    "age":23,
    "marks":{
        "eng":79,
        "urdu":92,
        "math":79,
        "phy":57,
    }
}

print(Student) 
print(Student["marks"])
print(Student["marks"]["urdu"])