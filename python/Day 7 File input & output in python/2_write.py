f = open("sample.txt", "w") # open a file and use w to write
data = f.write("hi") # write new file & content
print(data) # print
print(type(data)) #check data type



# f = open("sample.txt", "w+") # delete all data in file use (w+) to write
# f = open("sample.txt", "w") # write data in file use ( w )to write
# f = open("sample.txt", "r") # raed data in file use ( r )to write
# f = open("sample.txt", "r+") # over write the data in file use ( r+ ) to write
# f = open("sample.txt", "a") # apend data in file use (a) to write






f.close() # file close



