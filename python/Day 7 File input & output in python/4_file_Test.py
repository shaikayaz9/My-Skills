#lets practice

#create a new file "practice.txt" using python. add the following data in it.

'''

hi everyone
we are learning File i/o
using java,
i like programing in java.

'''

# wap that replace all occurence of "java" with "python" in above file.


with open("practice.txt","r") as f:
    # data = f.write("hi everyone\nwe are learning File i/o\nusing java,i like programing in java.")
    data = f.read()

    newData = data.replace("java", "python")

    # print(data)
    print(newData)