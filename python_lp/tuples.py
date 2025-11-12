# tuples syntax:
# var_name = (5,6,7)

my_tuple = (5, 6, 7, 7)
my_list = [5, 6, 7]

# Tuples are immutable — you cannot change their values
# my_tuple[0] = 2  # This will raise TypeError

# Access single tuple elements
print(my_tuple[0])      # Access by index → 5
print(my_tuple[-1])     # Negative index → last element (7)
print(my_tuple[-2])     # Second last element (7)

# Slicing tuples
print(my_tuple[0:2])    # Elements from index 0 to 1 → (5, 6)
print(my_tuple[:2])     # Same as above → (5, 6)
print(my_tuple[1:])     # From index 1 to end → (6, 7, 7)
print(my_tuple[1:2])    # Slice with single range → (6,)

# Loop through tuple using for loop
for x in my_tuple:
    print(x)

# Loop through tuple using while loop
x = 0
while x < len(my_tuple):
    print(my_tuple[x])
    x = x + 1

# Update a tuple (Indirect Method)
# Convert tuple → list → modify → convert back to tuple

my_con_tuple = list(my_tuple)
print(type(my_con_tuple))  # <class 'list'>

my_con_tuple[0] = 34       # Update first element
print(my_con_tuple)        # [34, 6, 7, 7]

my_con_tuple.pop(1)        # Remove element at index 1
print(my_con_tuple)        # [34, 7, 7]

# Tuple in-built methods
print(my_tuple.index(7))   # Returns first index of 7 → 2
print(my_tuple.count(7))   # Returns count of 7 → 2
