# ========================================
# Day 1 - Python Basics
# Topics: Variables, Data Types, Functions
# ========================================

# ---- VARIABLES ----
# Variables are containers that store data

name = "Tharunika"        # string
age = 20                  # integer
gpa = 9.46                # float
is_student = True         # boolean

print(name)
print(age)
print(gpa)
print(is_student)


# ---- DATA TYPES ----
print(type(name))         # <class 'str'>
print(type(age))          # <class 'int'>
print(type(gpa))          # <class 'float'>
print(type(is_student))   # <class 'bool'>


# ---- STRINGS ----
first = "Tharunika"
last = "R"

# joining strings
full_name = first + " " + last
print(full_name)

# f-strings (most used in real projects)
print(f"My name is {first} and I am {age} years old")


# ---- FUNCTIONS ----
# Functions are reusable blocks of code

def greet(name):
    return f"Hello {name}!"

def add(a, b):
    return a + b

def is_fresher(experience):
    if experience == 0:
        return "Fresher"
    else:
        return "Experienced"


# calling functions
print(greet("Tharunika"))
print(add(10, 20))
print(is_fresher(0))


# ---- CONNECTING TO RESUME ANALYZER ----
# This is how we'll use these concepts in our project!

def analyze_resume(candidate_name, skills, experience):
    print(f"Analyzing resume for {candidate_name}...")
    print(f"Skills found: {skills}")
    print(f"Profile type: {is_fresher(experience)}")

analyze_resume("Tharunika", "Python, AI", 0)