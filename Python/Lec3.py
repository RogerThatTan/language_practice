#List Topic
# List is a collection of items. It is a ordered and changeable. Allows duplicate members.

'''
marks = [94.4, 85.6,100.0, 90.0, 89.0]
print(marks)
print(marks[2])
print(type(marks))
print(len(marks))
student = ["John", "D", "Doe", 23, 3.5,marks]
print(student)
print(len(student))
print(len(student[5]))

student[0]="tanvir"
print(student)
#print(student[6])
print(marks)

print(marks[1:3])
print(marks[ :3])
print(marks[2: ])
print(marks[0:len(marks)])
print(marks[-3:-1])

marks.append(99.9) #Mutated
print(marks)
marks.sort()
print(marks)
marks.sort(reverse=True)
print(marks)
marks.reverse()
marks.insert(2, 100.0)
print(marks)
marks.remove(100.0)
print(marks)
marks.pop(2)
print(marks)

'''

#Tuple Topic
# Tuple is a collection of items. It is a ordered and unchangeable. Allows duplicate members.

'''

print("Tuple")

marks = (94.4, 85.6,100.0, 90.0, 89.0)
print(type(marks))
#tup[0]=100.0 not suported in tuple but possible in list
#print(tup)

tuple=()
print(tuple)
tuple=(1,3,2,)
print(tuple)

print(marks[4])


tup2 = (2,1,3,1)
print(tup2.index(3))

'''

#Practice Problem 1

'''
movies = []

movies.append(input("Enter the name of the movie: "))  
movies.append(input("Enter the name of the movie: "))   
movies.append(input("Enter the name of the movie: "))
print(movies)

'''

#Practice Problem 2
