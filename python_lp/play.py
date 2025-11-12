# playground

class Student:
  roll_number = 8  # Class variable

  def __init__(self, roll_number):
    self.roll_number = roll_number  # Instance variable

  def learn(self):
    return "learning..."

  def inner_bunk(self):
    pass   # Placeholder (empty method for now)

print(Student.roll_number)  # Accessing class-level attribute

saad = Student(3)           # Creating an object (instance)
print(saad.roll_number)     # Accessing instance-level attribute
print(saad.learn())         # Calling method


class Faculty:
  pass

# Object-level attribute
prasad = Faculty()
prasad.skills = ["python", "javascript"]
print(prasad.skills)
# print(prasad.work_load)  # AttributeError: not defined yet

# Class-level attribute
Faculty.work_load = 8
print(prasad.work_load)

hk = Faculty()
# print(hk.skills)  # AttributeError: only prasad has 'skills'


# Adding a method dynamically
def outer_bunk(self):
  return "running outer bunk..."

Student.inner_bunk = outer_bunk
print(saad.inner_bunk())
