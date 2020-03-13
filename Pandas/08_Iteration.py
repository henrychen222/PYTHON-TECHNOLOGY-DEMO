# 1.23 morning
# https://www.tutorialspoint.com/python_pandas/python_pandas_iteration.htm

"""
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
print()

for col in df:
    print(col)

print()
"""iteritems()"""
df = pd.DataFrame(np.random.randn(4, 3), columns=['col1', 'col2', 'col3'])
print(df)
print("\n--------------------------iteritems()-----------------------------")
for key, value in df.iteritems():
    print(key, value)

print("\n--------------------------iterrows()-----------------------------")
"""iterrows()"""
for row_index, row in df.iterrows():
    print(row_index, row)     # Iterate over DataFrame rows as (index, Series) pairs.

print("\n--------------------------itertuples()-----------------------------")
""""itertuples()"""
for row in df.itertuples():
    print(row)
