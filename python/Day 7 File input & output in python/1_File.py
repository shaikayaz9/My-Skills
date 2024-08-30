# file i/o input/output
# python can be used to perfrom operations on a file. (read & write data)

#types of all file

# 1 Text Files : .txt , .docx , .log etc.
# 2 Binary files : .mp4 , .mp3 , .mov , .jpg , .png etc 


#Open, Read & close File
# we have to open a file before raeding or write
# f = open("1_basic.py","mode")

f = open("Day 7 File input & output in python\demo.txt", "r")
data = f.readline()
print(data)
print(type(data))


# data = f.read(5)             # reads only 5 words
data1 = f.read(8)
print(data1)

# data = f.read()             # reads all words
data2 = f.read() # its readed already data
print(data2)

# data = f.readline()             # reads one line at the time
data3 = f.readable()   # its show me True & false values
print(data3)
f.close()