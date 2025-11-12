# range syntax:
# range(start, stop, step)

# Incorrect way (range itself doesn’t print values)
# print(range(5))
# print(range(0, 5))

# Correct way – convert to list for display
print(list(range(0, 5, 2)))   # Output: [0, 2, 4]

# Using range() with a for loop
nums = [1, 2, 3, 4]
for x in range(0, 5):
    print(x)

# Using reversed() with a string
nums = "prasad"
for x in reversed(nums):
    print(x)

# Short-hand for loop using list comprehension
[print(x) for x in nums]
