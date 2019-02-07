# 1.17 night
# https://www.tutorialspoint.com/python_pandas/python_pandas_basic_functionality.htm
"""
Series Basic Functionality:
1 	axes 	Returns a list of the row axis labels.
2 	dtype 	Returns the dtype of the object.
3 	empty 	Returns True if series is empty.
4 	ndim 	Returns the number of dimensions of the underlying data, by definition 1.
5 	size 	Returns the number of elements in the underlying data.
6 	values 	Returns the Series as ndarray.
7 	head() 	Returns the first n rows.
8 	tail() 	Returns the last n rows.

https://pandas.pydata.org/pandas-docs/stable/generated/pandas.Series.axes.html
https://pandas.pydata.org/pandas-docs/version/0.18/generated/pandas.Series.empty.html
https://pandas.pydata.org/pandas-docs/stable/generated/pandas.Series.ndim.html
https://pandas.pydata.org/pandas-docs/stable/generated/pandas.Series.size.html
https://pandas.pydata.org/pandas-docs/stable/generated/pandas.Series.values.html
https://pandas.pydata.org/pandas-docs/stable/generated/pandas.Series.head.html
https://pandas.pydata.org/pandas-docs/stable/generated/pandas.Series.tail.html
"""

import pandas as pd
import numpy as np

# Create a series with 100 random numbers
s = pd.Series(np.random.randn(4))
print(s)

print("\nThe axes are:")
print(s.axes)

print("\nIs the Object empty?")
print(s.empty)

print("\nThe dimensions of the object:")
print(s.ndim)

print("\nThe size of the object:")
print(s.size)

print("\nThe actual data series is:")
print(s.values)

# 1.18 night
print("\nThe first two rows of the data series:")
print(s.head(2))  # head() returns the first n rows(observe the index values)

print("\nThe last two rows of the data series:")
print(s.tail(2))  # tail() returns the last n rows(observe the index values)


