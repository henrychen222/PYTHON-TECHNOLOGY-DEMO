# 1.18 night
# https://www.tutorialspoint.com/python_pandas/python_pandas_basic_functionality.htm

"""
DataFrame Basic Functionality:
1 	T 	    Transposes rows and columns.
2 	axes 	Returns a list with the row axis labels and column axis labels as the only members.
3 	dtypes 	Returns the dtypes in this object.
4 	empty 	True if NDFrame is entirely empty [no items]; if any of the axes are of length 0.
5 	ndim 	Number of axes / array dimensions.
6 	shape 	Returns a tuple representing the dimensionality of the DataFrame.
7 	size 	Number of elements in the NDFrame.
8 	values 	Numpy representation of NDFrame.
9 	head() 	Returns the first n rows.
10 	tail() 	Returns last n rows.

https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.T.html
https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.axes.html
https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.dtypes.html
https://pandas.pydata.org/pandas-docs/version/0.18/generated/pandas.DataFrame.empty.html
https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.ndim.html
https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.shape.html
https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.size.html
https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.values.html
https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.head.html
https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.tail.html
"""

import pandas as pd
import numpy as np

d = {'Name': pd.Series(['Tom', 'James', 'Ricky', 'Vin', 'Steve', 'Smith', 'Jack']),
     'Age': pd.Series([25, 26, 25, 23, 30, 29, 23]),
     'Rating': pd.Series([4.23, 3.24, 3.98, 2.56, 3.20, 4.6, 3.8])}

df = pd.DataFrame(d)
print("Our data series is:")
print(df)  # Returns the transpose of the DataFrame. The rows and columns will interchange

print("\nThe transpose of the data series is:")
print(df.T)

print("\nRow axis labels and column axis labels are:")
print(df.axes)  # Returns the list of row axis labels and column axis labels

print("\nThe data types of each column are:")
print(df.dtypes)  # Returns the data type of each column

print("\nIs the object empty?")
print(df.empty)

print("\nThe dimension of the object is:")
print(df.ndim)  # Returns the number of dimensions of the object. By definition, DataFrame is a 2D object

print("\nThe shape of the object is:")
print(df.shape)  # Returns a tuple representing the dimensionality of the DataFrame, Tuple (a,b)  a: rows  b: columns

print("\nThe total number of elements in our object is:")
print(df.size)  # Returns the number of elements in the DataFrame

print("\nThe actual data in our data frame is:")
print(df.values)  # Returns the actual data in the DataFrame as an NDarray

print("\nThe first two rows of the data frame is:")
print(df.head(2))

print("\nThe last two rows of the data frame is:")
print(df.tail(2))
