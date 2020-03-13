# 1.14 night 1.15 night
# https://www.tutorialspoint.com/python_pandas/python_pandas_dataframe.htm

import pandas as pd

"""Create an Empty DataFrame"""
df = pd.DataFrame()
print(df)

"""Create a DataFrame from Lists"""
# Example1
print()
data = [1, 2, 3, 4, 5]
df_data = pd.DataFrame(data)
print(df_data)

# Example2    1.15
print()
data2 = [['Alex', 10], ['Bob', 12], ['Clarke', 13]]
df_data2 = pd.DataFrame(data2, columns=['Name', 'Age'])  # 命名列用columns
print(df_data2)

# Example3
print()
df_data3 = pd.DataFrame(data2, columns=['Name', 'Age'], dtype=float)
print(df_data3)

"""Create a DataFrame from Dict of Lists / ndarrays """
# Example1
print()
dict_data = {'Name': ['Tom', 'Jack', 'Steve', 'Ricky'], 'Age': [28, 34, 29, 42]}
df_dict_data = pd.DataFrame(dict_data)
print(df_dict_data)

# Example2
print()
df_dict_data2 = pd.DataFrame(dict_data, index=['rank1', 'rank2', 'rank3', 'rank4'])  # 命名行用index
print(df_dict_data2)

"""Create a DataFrame from List of Dicts"""
# Example 1
print()
list_data = [{'a': 1, 'b': 2}, {'a': 5, 'b': 10, 'c': 20}]
df_list_data = pd.DataFrame(list_data)
print(df_list_data)

# Example 2
print()
df_list_data2 = pd.DataFrame(list_data, index=['first', 'second'])
print(df_list_data2)

# Example 3
print()
df_list_data3 = pd.DataFrame(list_data, index=['first', 'second'], columns=['a', 'b'])
print(df_list_data3)
print()
df_list_data4 = pd.DataFrame(list_data, index=['first', 'second'], columns=['a', 'b1'])  # b1 is not dict key,so NaN
print(df_list_data4)

"""Create a DataFrame from Dict of Series"""
print()
s1 = pd.Series([1, 2, 3], index=['a', 'b', 'c'])
s2 = pd.Series([1, 2, 3, 4], index=['a', 'b', 'c', 'd'])
data_from_series = {'one': s1, 'two': s2}
df_series_data = pd.DataFrame(data_from_series)
print(df_series_data)

""" Column Addition """
print()
print("Adding a new column by passing as Series:")
df_series_data['three'] = pd.Series([10, 20, 30], index=['a', 'b', 'c'])
print(df_series_data)

print()
print("Adding a new column using the existing columns in DataFrame:")
df_series_data['four'] = df_series_data['one'] + df_series_data['three']
print(df_series_data)

""" Column and Row Deletion """
# del and pop() is to delete columns, drop is to delete indexs/rows
print()
print("Deleting the first column using DEL function:")
del df_series_data['one']
print(df_series_data)

print()
print("Deleting another column using POP function:")
df_series_data.pop('two')  # https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.pop.html
print(df_series_data)

print()
print("Deleting rows using DROP function:")
# Drop rows with label/index 0
df_series_data = df_series_data.drop(
    "c")  # https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.drop.html
print(df_series_data)
