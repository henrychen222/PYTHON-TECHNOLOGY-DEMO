# 1.21 afternoon
# https://www.tutorialspoint.com/python_pandas/python_pandas_function_application.htm

"""
https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.pipe.html
https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.apply.html
https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.applymap.html
"""

import pandas as pd
import numpy as np


def adder(ele1, ele2):
    return ele1 + ele2


df = pd.DataFrame(np.random.randn(5, 3), columns=['col1', 'col2', 'col3'])
print(df)

"""Table-wise Function Application:   pipe()"""
df.pipe(adder, 2)

"""Row or Column Wise Function Application:  apply()"""
print()
print(df.apply(np.mean))

df.apply(np.mean, axis=1)
print()
print(df.apply(np.mean))

df.apply(lambda x: x.max() - x.min())
print()
print(df.apply(np.mean))

"""Element Wise Function Application: applymap()"""
df['col1'].map(lambda x: x * 100)
print()
print(df.apply(np.mean))

df.applymap(lambda x: x * 100)
print()
print(df.apply(np.mean))
