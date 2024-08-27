# SET in python

#set is the collection of the unordered items
# each element in the set must be unique & immutable.


num = {1,2,3,4,4,5,6}
sub = {"hindi", "urdu", "eng","telgugu","marathi"}
print(num)
print(sub)

#repeated elements stored only once, so its resolved to {1,2}

Null_set = set()
print(type(Null_set))

# add
sub.add("ayaz")

# sub["telgugu"] = "telugu"  # TypeError: 'set' object does not support item assignment
print(sub)


