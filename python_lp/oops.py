class Student:
    roll_number = 8  # class attribute

    def __init__(self, roll_number):
        self.roll_number = roll_number

    def learn(self):  # class method
        return "learning"

    def bunk():
        pass


saad = Student(157)
print(saad.roll_number)
print(saad.learn())

print(Student.roll_number)


class Faculty:
    pass

    def teach():
        pass


prasad = Faculty()
prasad.skills = ["python", "js"]


#
def teach():
    return "teaching"


prasad.teach = teach
print(prasad.teach())

#


gatik = Faculty()
# print(gatik.skills)

Faculty.skills = ["read"]
print(gatik.skills)


# Parent class
class Person:
    def __init__(self, fname, lname):
        self.fname = fname
        self.lname = lname

    def print_full_name(self):
        return self.fname + " " + self.lname


# child class
class User(Person):
    def __init__(self, fname, lname, password):
        # self.fname = fname
        # self.lname = lname
        super().__init__(fname, lname)

    # from parent - overrides parent function
    def print_full_name(self):
        return self.fname + " and " + self.lname

    # it's own
    def set_username(self):
        return self.fname


# make object of perosn class
# person_one = Person("John", "Cena")
# print(person_one.fname)
# print(person_one.lname)

# make object of user class
user_one = User(fname, "Cena")
# print(user_one.fname)  # John
# print(user_one.lname)  # Cena
print(user_one.print_full_name())  # John Cena


# user - usernmae, password
# auth - login, reg,
