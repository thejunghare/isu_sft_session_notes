# # import custom_module
# # from custom_module import y
# import custom_module as nums
# # from custom_module import y as a # wrong

# # print(custom_module.x)
# # print(y)
# print(nums.y)

try :
  print(x)
except Exception as e:
  print("default", e)
else:
  print("inside else")
finally:
  print("inside finally")

my_set = {5,6,7, 7, True, 1}
# my_set[0]

for x in my_set:
  print(x)

my_set.add("Q")
