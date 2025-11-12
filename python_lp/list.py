list1 = [1, 2, 3, 4, 5]

# Access element at index 2 (indexing starts from 0)
print(list1[2])  # Output: 3

# Update value at index 2
list1[2] = True
print(list1[2])  # Output: True

# Remove element at index 0 using pop()
list1.pop(0)
print(list1)  # Output: [2, True, 4, 5]

# Add new element to the end using append()
list1.append(8)
print(list1)  # Output: [2, True, 4, 5, 8]

# Insert element at specific position (index 0)
list1.insert(0, "prasad")
print(list1)  # Output: ['prasad', 2, True, 4, 5, 8]

# Iterate through list using for loop
for x in list1:
    print(x)

# Print elements using list comprehension
[print(x) for x in list1]

# Print elements in reverse order using reversed()
for x in reversed(list1):
    print(x)

# Print reversed list using slicing
print(list1[::-1])
