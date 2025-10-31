# range syntax
# range(start,stop,step)

# incorrect way
# print(range(5))
# print(range(0,5))


# correct way
print(list(range(0,5,2))) # with list

# using for loop
nums=[1,2,3,4]
for x in range(0,5):
  print(x)


#with string using reversed
nums="prasad"
for x in reversed(nums):
  print(x)

# short hand
[print(x)for x in nums]
