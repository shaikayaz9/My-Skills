#write a Program to ask user to enter name of their 3 super heros name & store in a list,
#FRIST WAY TO DO TASK
Hero = []

hero1 = input("Enter 1st frind name : ")
hero2 = input("Enter 2nd frind name : ")
hero3 = input("Enter 3rd frind name : ")

print(hero1 ,hero2, hero3)

Hero.append(hero1 )
Hero.append(hero2 )
Hero.append(hero3)

print(type(Hero), Hero)


#2ND WAY TO DO TASK
#YOU CAN CREATE THEM LIKE THAT

SuperHero = []

heroo = input("Enter 1st heros name : ")
SuperHero.append(heroo)
heroo = input("Enter 2nd heros name : ")
SuperHero.append(heroo)
heroo = input("Enter 3rd heros name : ")
SuperHero.append(heroo)

print(type(SuperHero),SuperHero)



#3RD WAY TO DO TASK

movies = []
print("Enter your Favrate Movie name")
movies.append(input("enter 1st name : "))
movies.append(input("enter 2st name : "))
movies.append(input("enter 3st name : "))

print(movies)
