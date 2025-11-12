fname = "Bassi"

# Access one character by index
print(fname[0])        # Output: B

# String methods (functions)
print(fname.upper())   # Output: BASSI
print(fname.lower())   # Output: bassi
print(fname.title())   # Output: Bassi

# Strings are immutable
# fname[0] = 2   # TypeError: 'str' object does not support item assignment

# Reassignment (creating a new string)
fname = "gatik"

# Negative indexing
print(fname[-4])       # Output: a
