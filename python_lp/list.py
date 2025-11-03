list1=[1,2,3,4,5]
print(list1[2])

list1[2]=True
print(list1[2])

list1.pop(0)
print(list1)

list1.append(8)
print(list1)

list1.insert(0,"prasad")
print(list1)

for x in list1:
  print(x)

[print(x) for x in list1]

for x in reversed(list1):
  print(x)


print(list1[::-1])


