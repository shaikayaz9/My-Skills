student = {
    "fname":"ayaz",
    "age":23,
    "isFollow":True,
     "marks":{
        "eng":79,
        "urdu":92,
        "math":79,
        "phy":57,
    }

}
print(student)
print(list(student.keys()))

# myDict.keys()
print(student.keys()) # return all keys

# myDict.values()
print(student.values()) #return all values

# myDict.items()
print(student.items()) #return all (key,val) pairs as tuples

# myDict.get("key")
print(student.get("fname")) # return the key accourding to value

# myDict.updata(newDict)
student.update({"City": "india"}) # insert the specifield items to the Dictionary
print(student)