# Exception handling block
try:
    print(x)                          # x is not defined in this file, will raise NameError
except Exception as e:
    print("default", e)               # Handles the error
else:
    print("inside else")              # Runs only if try block succeeds
finally:
    print("inside finally")           # Runs no matter what