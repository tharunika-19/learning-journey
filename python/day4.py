# LIST: A collection of items stored in a single variable (mutable = can change)
numbers = [5, 2, 9, 1, 7]

# LENGTH: len() returns number of elements in the list
print("Length of list:", len(numbers))   # Output: 5

# SLICING: Extract a portion of the list using [start:end]
# start index is included, end index is excluded
print("First 3 elements:", numbers[:3])   # [5, 2, 9]
print("Last 2 elements:", numbers[-2:])   # [1, 7]

# MUTABLE: Lists can be modified after creation
numbers[0] = 100   # changing first element
print("After modification:", numbers)  # [100, 2, 9, 1, 7]

# OBJECT: 'numbers' is a list object (everything in Python is an object)

# METHODS: Functions that belong to an object (called using dot '.')
numbers.append(50)    # adds element at the end
numbers.remove(2)     # removes specific element
numbers.pop()         # removes last element

print("After using methods:", numbers)

# SORT(): List method → modifies the original list
numbers.sort()
print("After sort():", numbers)

# SORTED(): Function → returns a new sorted list (original unchanged)
new_list = sorted(numbers)
print("Using sorted():", new_list)

# LIST METHODS: Common built-in methods for lists
numbers.reverse()     # reverses list order
print("After reverse():", numbers)

# TUPLE: Similar to list but IMMUTABLE (cannot be changed)
my_tuple = (10, 20, 30)

# Trying to modify tuple will cause error
# my_tuple[0] = 99   ❌ Not allowed

print("Tuple:", my_tuple)