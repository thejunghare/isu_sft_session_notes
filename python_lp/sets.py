# Demonstrating set properties
my_set = {5, 6, 7, 7, True, 1}        # Duplicate values and True treated as 1
# Sets do not support indexing
# my_set[0]  # This will raise a TypeError

# Iterating through a set
for x in my_set:
    print(x)

# Adding a new element to the set
my_set.add("Q")
print("Updated set:", my_set)