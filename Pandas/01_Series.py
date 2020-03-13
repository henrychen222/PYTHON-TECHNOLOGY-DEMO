# 1.14 night
# https://www.tutorialspoint.com/python_pandas/python_pandas_series.htm

import pandas as pd
import numpy as np

"""Create an Empty Series"""
s = pd.Series
print(s)

"""Create a Series from np array"""
print()
data = np.array(['a', 'b', 'c', 'd'])
data = pd.Series(data)
print(data)

"""Create a Series from dict"""
# Example 1
print()
data_dict = {'a': 0., 'b': 1., 'c': 2.}
data_dict = pd.Series(data_dict)
print(data_dict)
# Observe - Dictionary keys are used to construct index

# Example 2
print()
data_dict2 = {'a': 0., 'b': 1., 'c': 2.}
data_dict2 = pd.Series(data_dict2, index=['a', 'b', 'c', 'd'])
print(data_dict2)
# Observe − Index order is persisted and the missing element is filled with NaN (Not a Number).

"""Create a Series from Scalar"""
# If data is a scalar value, an index must be provided. The value will be repeated to match the length of index
print()
data_scalar = pd.Series(5, index=['0', '1', '2', '3'])
print(data_scalar)

"""Accessing Data from Series with Position"""
print()
new_data = pd.Series([1, 2, 3, 4, 5], index=['a', 'b', 'c', 'd', 'e'])
print(new_data[0])
print(new_data[1])
print()
print(new_data[:3])  # retrieve the first three element
print()
print(new_data[-3:])  # retrieve the last three element

"""Retrieve Data Using Label (Index)"""
print()
print(new_data['a'])  # retrieve single elements
print()
print(new_data[['a', 'c', 'd']])  # retrieve multiple elements
# print(new_data['f'])  # an exception
