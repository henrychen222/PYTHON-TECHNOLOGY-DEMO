# 1.15 night
# https://www.tutorialspoint.com/python_pandas/python_pandas_dataframe.htm
import pandas as pd

d = {'one': pd.Series([1, 2, 3], index=['a', 'b', 'c']),
     'two': pd.Series([1, 2, 3, 4], index=['a', 'b', 'c', 'd'])}
df = pd.DataFrame(d)
print(df)

# Selection by Label
print()
print(df.loc['b'])

# Selection by integer location
print()
print(df.iloc[2])

# Slice Rows
print()
print(df[2:4])

# Deletion of Rows      see dataFrame.py """ Column and Row Deletion """  del pop() drop()
print()
new_df = pd.DataFrame([[1, 2], [3, 4]], columns=['a', 'b'])
new_df2 = pd.DataFrame([[5, 6], [7, 8]], columns=['a', 'b'])
new_df = df.append(new_df2)
print(new_df)
print()

# Drop rows with label/index 0
new_df = new_df.drop(0)
print(new_df)

