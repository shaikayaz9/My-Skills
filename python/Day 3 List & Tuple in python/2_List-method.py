#LIST METHOD

marks = [90,70,60,80,50]  #demo data
print(marks)


# list.append 
marks.append(4) #adds elements at the end
print(marks) #[90, 80, 70, 60, 50] + 4 


# list sort()
marks.sort() #short in acending order
print(marks)  #[4, 50, 60, 70, 80, 90]


# list sort()
marks.sort(reverse=True) #short in acending order
print(marks) #[90, 80, 70, 60, 50, 4]

# list.reverse()
marks.reverse() #reverse list
print(marks)  #[4, 50, 60, 70, 80, 90]

#list.insert(idx, el)
marks.insert(2,100) #insert list 100 at 2nd idx
print(marks) #[4, 50, 100, 60, 70, 80, 90]

#list.remove(1)
marks.remove(100) #remove frist occurence of elements
print(marks)  #[4, 50, 60, 70, 80, 90]


#list.pop
marks.pop(1) #remove elements at 1
print(marks) #[4, 60, 70, 80, 90]
