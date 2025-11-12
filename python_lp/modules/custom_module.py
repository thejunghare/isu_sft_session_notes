# custom_module.py

# Variables defined in this module
x = 24
y = 25

# Function that validates numbers
def validate_numbers(x):
    # If x is negative, return False
    if x < 0:
        return False
    # Otherwise, raise an error intentionally (for demo purposes)
    else:
        raise ValueError("Something is wrong")
    # This line will never be reached due to the raise statement
    return True
