my_tuple = (5, 6, 7, 7)
my_list = [5, 6, 7]
# my_tuple[0] = 2 # tuples are unchangable

# print a single tuple value
# print(my_tuple[0])
# # print using negative indexing
# print(my_tuple[-1])
# print(my_tuple[-2])

# # slicing
# print(my_tuple[0:2])
# print(my_tuple[:2])

# print(my_tuple[1:])
# print(my_tuple[1:2])


# # loop through the tuple using for loop
# for x in my_tuple:
#     print(x)


# # loop through the tuple using while loop
# x = 0

# while x < len(my_tuple):
#     print(my_tuple[x])
#     x = x + 1


# update a tuple
# my_list[1] = 3
# my_con_tuple = list(my_tuple)
# print(type(my_con_tuple))  # 5,6,7
# my_con_tuple[0] = 34
# print(my_con_tuple)  # 34, 6, 7

# my_con_tuple.pop(1)
# print(my_con_tuple)  # 34, 7

# tuple in built methods
# count(7) -> retunrns count of value occured
# index(1) ->  return index of value mentioned in para

print(my_tuple.index(7))
print(my_tuple.count(7))
