# 1.23 morning
# https://www.tutorialspoint.com/python_pandas/python_pandas_reindexing.htm
"""
https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.reindex.html
https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.reindex_like.html
https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.rename.html
"""

import pandas as pd
import numpy as np

N = 20

df = pd.DataFrame({
    'A': pd.date_range(start='2016-01-01', periods=N, freq='D'),
    'x': np.linspace(0, stop=N - 1, num=N),
    'y': np.random.rand(N),
    'C': np.random.choice(['Low', 'Medium', 'High'], N).tolist(),
    'D': np.random.normal(100, 10, size=(N)).tolist()
})
print(df)

# get a new data frame with specified rows and coloumns
print()
df_reindexed = df.reindex(index=[0, 2, 5], columns=['A', 'C', 'B'])
print(df_reindexed)

"""Reindex to Align with Other Objects"""
df1 = pd.DataFrame(np.random.randn(10, 3), columns=['col1', 'col2', 'col3'])
df2 = pd.DataFrame(np.random.randn(7, 3), columns=['col1', 'col2', 'col3'])

print()
print(df1)
df1 = df1.reindex_like(df2)  # match df1 with df2
print()
print(df1)

print()
"""Filling while ReIndexing"""  # method = ""
df3 = pd.DataFrame(np.random.randn(6, 3), columns=['col1', 'col2', 'col3'])
df4 = pd.DataFrame(np.random.randn(2, 3), columns=['col1', 'col2', 'col3'])
print(df4.reindex_like(df3))
print()
print("Data Frame with Forward Fill:")
print(df4.reindex_like(df3, method='ffill'))

print()
"""Limits on Filling while Reindexing"""
print("Data Frame with Forward Fill limiting to 1:")
print(df4.reindex_like(df4, method='ffill', limit=1))

print()
"""Renaming"""
df_rename_test = pd.DataFrame(np.random.randn(6, 3), columns=['col1', 'col2', 'col3'])
print(df_rename_test)
print()
print("After renaming the rows and columns:")
print(df_rename_test.rename(columns={'col1': 'c1', 'col2': 'c2'},
                            index={0: 'apple', 1: 'banana', 2: 'durian'}))
