# class Student:
#     roll_number = 8  # class attribute

#     def __init__(self, roll_number):
#         self.roll_number = roll_number

#     def learn(self):  # class method
#         return "learning"

#     def bunk():
#         pass


# saad = Student(157)
# print(saad.roll_number)
# print(saad.learn())

# print(Student.roll_number)


# class Faculty:
#     pass

#     def teach():
#         pass


# prasad = Faculty()
# prasad.skills = ["python", "js"]


# #
# def teach():
#     return "teaching"


# prasad.teach = teach
# print(prasad.teach())

# #


# gatik = Faculty()
# # print(gatik.skills)

# Faculty.skills = ["read"]
# print(gatik.skills)


# # Parent class
# class Person:
#     def __init__(self, fname, lname):
#         self.fname = fname
#         self.lname = lname

#     def print_full_name(self):
#         return self.fname + " " + self.lname


# # child class
# class User(Person):
#     def __init__(self, fname, lname, password):
#         # self.fname = fname
#         # self.lname = lname
#         super().__init__(fname, lname)

#     # from parent - overrides parent function
#     def print_full_name(self):
#         return self.fname + " and " + self.lname

#     # it's own
#     def set_username(self):
#         return self.fname


# # make object of perosn class
# # person_one = Person("John", "Cena")
# # print(person_one.fname)
# # print(person_one.lname)

# # make object of user class
# user_one = User(fname, "Cena")
# # print(user_one.fname)  # John
# # print(user_one.lname)  # Cena
# print(user_one.print_full_name())  # John Cena


# user - username, password
# auth - login, reg,

# user_input = input('Enter your usernam: ')
# user_password = input('Enter your password: ')

# class User:
#   def __init__(self, username, password):
#     self.username = username
#     self.__password = password # made private

#     def get_password(self): # accessable to other
#       return self.__password


# class Auth(User):
#   def __init__(self, username, password):
#     super().__init__(username, password)
#   def login(self,username, password):
#     if self.username == user_input and password == user_password:
#       return True
#     else:
#       return False
#   def reg():
#     pass

# obj = Auth('prasad', '123')
# print(obj.login(user_input, user_password))



from abc import ABC, abstractmethod
class Human(ABC):
  @abstractmethod
  def talk(self):
    print("talking..")


class Man(Human):
#   def talk(self):
#     print('hmmm')
    def walk(self):
       print('walking')

person = Man()
person.walk()




