import os

with open("new.txt", "a")as f:
    data = f.write("\npython code!")
    # data = f.read()
    print(data)
    print(type(data))

os.remove("new.txt") # its can be delete a file 