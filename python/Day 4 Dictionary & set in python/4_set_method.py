# set method

collection = { "hindi","urdu","telugu","marathi","math","english"}
print(collection)


# set.add(el)  
collection.add("AYAZ") #adds an elements
print(collection)

# #set.remove(el)  
collection.remove("telugu") #removes the elements
print(collection)


#set.pop()  
collection.pop() #remove the random el
print(collection)


# set.clear()
collection.clear() #empties the set
print(collection)




# set.union(set2)  # combines both set values & return new

set1 = {1,2,3,4} # its return new set
set2 = {3,4,5,6}

print(set1.union(set2))
# set.intersection(set2) # combines common values & return new

print(set1.intersection(set2)) #common values show only