# ========================================
# Day 2 - Booleans & Conditions
# ========================================

# ---- BOOLEANS ----
print(True)
print(False)
print(type(True))          # <class 'bool'>

# bool() on integers
print(bool(0))             # False
print(bool(1))             # True
print(bool(42))            # True
print(bool(-1))            # True  (anything non-zero = True)

# int() on booleans (answering Kaggle's question!)
print(int(True))           # 1
print(int(False))          # 0
# So True = 1 and False = 0 under the hood!


# ---- COMPARISONS ----
x = 10
y = 20

print(x == y)              # False - equal to
print(x != y)              # True  - not equal
print(x > y)               # False - greater than
print(x < y)               # True  - less than
print(x >= 10)             # True  - greater or equal
print(x <= 10)             # True  - less or equal


# ---- CONDITIONS ----
score = 85

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Grade: F")


# ---- AND / OR / NOT ----
has_degree = True
has_experience = False

# and → both must be True
if has_degree and has_experience:
    print("Strong candidate!")

# or → at least one must be True
if has_degree or has_experience:
    print("Potential candidate!")

# not → flips the boolean
if not has_experience:
    print("Fresher profile!")


# ---- CONNECTING TO RESUME ANALYZER ----
# This is how conditions will be used in our project!

def check_resume_strength(skills_count, has_experience, gpa):
    if skills_count >= 5 and gpa >= 8.0:
        return "Strong Resume! ✅"
    elif skills_count >= 3 or has_experience:
        return "Average Resume ⚠️"
    else:
        return "Needs Improvement ❌"

print(check_resume_strength(6, False, 8.5))
print(check_resume_strength(2, False, 6.0))
print(check_resume_strength(3, True, 7.0))