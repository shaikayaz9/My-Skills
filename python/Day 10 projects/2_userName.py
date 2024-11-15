# WAP to add user name & password , add all method you learned  

user = input("Enter your user name : ") 
Password = int(input("Enter your Pass : "))
user = user.capitalize()
user = user + str(len(user)) 
userId = []
userId.append(user)
userId.append(Password)

print(user)
print(Password)
print(userId)