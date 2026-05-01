# ============================================================
# PYTHON MODULES & LIBRARIES - COMPLETE REVISION FILE
# (ALL IN ONE - NOTES + EXAMPLES AS COMMENTS)
# ============================================================


# ------------------------------------------------------------
# 1. WHAT IS A MODULE?
# ------------------------------------------------------------
# A module is a file containing functions, variables, and classes.
# Used to reuse code and organize programs.

# Example:
# import math
# print(math.sqrt(16))


# ------------------------------------------------------------
# 2. WHAT IS A PACKAGE?
# ------------------------------------------------------------
# A package is a collection of modules.
# Example: numpy is a package, numpy.linalg is a submodule

# WHY?
# To organize large projects into folders/modules


# ------------------------------------------------------------
# 3. DIFFERENT WAYS TO IMPORT
# ------------------------------------------------------------

# 1. Normal import (RECOMMENDED)
# import math
# print(math.sqrt(16))

# WHY?
# Clear and avoids confusion


# 2. Import specific function
# from math import sqrt
# print(sqrt(25))

# WHY?
# Shorter code


# 3. Alias (very common in real-world)
# import numpy as np
# arr = np.array([1,2,3])

# WHY?
# Short names, industry standard


# 4. Import everything (NOT RECOMMENDED)
# from math import *

# WHY NOT?
# - Name conflicts
# - Hard to debug
# - Not readable


# ------------------------------------------------------------
# 4. dir() FUNCTION
# ------------------------------------------------------------
# Shows all functions/variables inside a module

# Example:
# import math
# print(dir(math))

# WHY?
# To explore unknown modules


# ------------------------------------------------------------
# 5. help() FUNCTION
# ------------------------------------------------------------
# Shows documentation of a function/module

# Example:
# help(math.sqrt)

# WHY?
# To understand usage, parameters, return values


# ------------------------------------------------------------
# 6. NAMESPACE (VERY IMPORTANT)
# ------------------------------------------------------------
# Namespace = space where names are stored

# Example:
# import math
# math.sqrt(4)

# WHY?
# Prevents conflicts (multiple modules can have same function names)


# ------------------------------------------------------------
# 7. LOG FUNCTIONS (IMPORTANT)
# ------------------------------------------------------------
# Used in mathematics and data science

# Example:
# import math
# math.log(10)        # natural log (base e)
# math.log10(100)     # base 10
# math.log(8, 2)      # log base 2

# WHERE USED?
# - Algorithms
# - Engineering maths
# - Data science


# ------------------------------------------------------------
# 8. SUBMODULES
# ------------------------------------------------------------
# A module inside another module

# Example:
# import os
# os.getcwd()              # get current directory

# import os.path
# os.path.exists("file.txt")

# WHY?
# Better organization of functionalities


# ------------------------------------------------------------
# 9. POPULAR PYTHON LIBRARIES
# ------------------------------------------------------------

# ---------- NUMPY ----------
# Used for numerical computations (arrays, matrices)

# import numpy as np
# arr = np.array([1,2,3])
# print(arr * 2)

# WHY?
# Faster than normal Python lists


# ---------- PANDAS ----------
# Used for data analysis and handling tables

# import pandas as pd
# data = {'name': ['A','B'], 'age':[20,21]}
# df = pd.DataFrame(data)
# print(df)

# WHERE USED?
# - Data analysis
# - Excel-like operations


# ---------- MATPLOTLIB ----------
# Used for plotting graphs

# import matplotlib.pyplot as plt
# x = [1,2,3]
# y = [2,4,6]
# plt.plot(x,y)
# plt.show()

# WHERE USED?
# - Data visualization
# - Reports


# ---------- TENSORFLOW ----------
# Used for machine learning (advanced)

# import tensorflow as tf
# print(tf.__version__)

# WHERE USED?
# - AI
# - Deep learning


# ------------------------------------------------------------
# 10. BUILT-IN FUNCTIONS (IMPORTANT)
# ------------------------------------------------------------

# print(type(10))       # <class 'int'>
# print(len("hello"))   # 5
# print(abs(-5))        # 5

# WHY?
# Frequently used in coding and exams


# ------------------------------------------------------------
# 11. KEY CONCEPTS TO REMEMBER
# ------------------------------------------------------------

# Module → Single file
# Package → Collection of modules
# Namespace → Avoids conflicts
# Submodule → Module inside module

# dir() → explore module
# help() → understand function

# import → load module
# alias → short name

# Avoid: from module import *

# Libraries:
# numpy → numerical
# pandas → data handling
# matplotlib → graphs
# tensorflow → machine learning


# ------------------------------------------------------------
# 12. MINI COMBINED EXAMPLE (LOGIC FLOW)
# ------------------------------------------------------------

# import math
# import numpy as np

# nums = np.array([1,2,3,4])

# roots = [math.sqrt(x) for x in nums]
# logs = [math.log(x) for x in nums]

# print("Numbers:", nums)
# print("Square roots:", roots)
# print("Logs:", logs)


# ============================================================
# END OF REVISION FILE
# ============================================================