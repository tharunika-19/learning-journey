# =======================
# 🔤 STRINGS (IMMUTABLE)
# =======================

s = "hello python"

# LENGTH
print("Length:", len(s))   # number of characters

# INDEXING (accessing single character)
print("First char:", s[0])      # 'h'
print("Last char:", s[-1])      # 'n'

# SLICING (start:end:step)
print("Slice 0:5:", s[0:5])     # 'hello'
print("Reverse string:", s[::-1])  # reverse

# IMMUTABILITY
# s[0] = 'H' ❌ ERROR (strings cannot be modified)

# Correct way → create new string
s = "H" + s[1:]
print("Modified string:", s)


# =======================
# 🔧 STRING METHODS
# =======================

text = "  hello world  "

print(text.upper())      # HELLO WORLD
print(text.lower())      # hello world
print(text.title())      # Hello World
print(text.strip())      # removes spaces
print(text.replace("world", "python"))  # replace text
print(text.split())      # ['hello', 'world']

# JOIN (combine list into string)
words = ["I", "love", "python"]
print(" ".join(words))   # I love python

# CHECK METHODS
print("hello".isalpha())   # True
print("123".isdigit())     # True
print("abc123".isalnum())  # True

# FIND & COUNT
print(text.find("world"))   # index of 'world'
print(text.count("l"))      # number of 'l'

# FORMAT
name = "Tharunika"
age = 20
print("My name is {} and I am {}".format(name, age))

# f-string (modern way 🔥)
print(f"My name is {name} and I am {age}")


# =======================
# 🔁 ITERATION + "in"
# =======================

for ch in "python":
    print(ch)   # iterable

print("py" in "python")   # True


# =======================
# 📚 DICTIONARIES
# =======================

# Dictionary = key-value pairs (mutable)
student = {
    "name": "Tharunika",
    "age": 20,
    "marks": 95
}

# ACCESS VALUES
print(student["name"])     # Tharunika

# USING get() (safe way)
print(student.get("age"))

# ADD / UPDATE
student["age"] = 21
student["city"] = "Hyderabad"

# DELETE
student.pop("marks")     # removes key
# del student["age"]

print("Updated dict:", student)


# =======================
# 🔁 ITERATING DICTIONARY
# =======================

# keys
for key in student:
    print("Key:", key)

# values
for value in student.values():
    print("Value:", value)

# key-value pairs
for key, value in student.items():
    print(key, ":", value)


# =======================
# 🔧 DICTIONARY METHODS
# =======================

print(student.keys())     # all keys
print(student.values())   # all values
print(student.items())    # key-value pairs

# COPY
new_student = student.copy()

# UPDATE
student.update({"age": 22})

# CLEAR
temp = {"a": 1}
temp.clear()   # becomes empty {}

# FROMKEYS
keys = ["a", "b", "c"]
new_dict = dict.fromkeys(keys, 0)
print(new_dict)   # {'a':0, 'b':0, 'c':0}


# =======================
# 🔥 LIST COMPREHENSION WITH DICT
# =======================

squares = {x: x*x for x in range(5)}
print("Dict comprehension:", squares)


# =======================
# 🔁 ANY FUNCTION
# =======================

print(any([False, False, True]))  # True


# =======================
# ⚠️ IMPORTANT NOTES
# =======================

# ✔ Strings → IMMUTABLE
# ✔ Dictionaries → MUTABLE
# ✔ Keys must be UNIQUE
# ✔ Keys must be immutable (string, int, tuple)