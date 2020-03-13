# 1.17 night
# https://www.tutorialspoint.com/python_pandas/python_pandas_panel.htm
import pandas as pd
import numpy as np

"""Create an Empty Panel"""
p = pd.Panel()
print(p)

print()
"""Create Panel From 3D ndarray"""
data = np.random.rand(2, 4, 5)
p = pd.Panel(data)
print(p)

print()
"""Create Panel From dict of DataFrame Objects"""
dict_data = {'Item1': pd.DataFrame(np.random.randn(4, 3)),
             'Item2': pd.DataFrame(np.random.randn(4, 2))}
dict_p = pd.Panel(dict_data)
print(dict_p)

print()
"""Selecting the Data from Panel"""
print(dict_p['Item1'])
print()
print(dict_p.major_xs(1))  # Data can be accessed using the method panel.major_axis(index)
print()
print(dict_p.minor_xs(1))  # Data can be accessed using the method panel.minor_axis(index)
