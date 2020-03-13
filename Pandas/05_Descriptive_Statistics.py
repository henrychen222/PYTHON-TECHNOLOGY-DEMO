# 1.18 night 1.19 morning
# https://www.tutorialspoint.com/python_pandas/python_pandas_descriptive_statistics.htm
"""
1 	count() 	Number of non-null observations
2 	sum() 	    Sum of values
3 	mean()     	Mean of Values
4 	median() 	Median of Values
5 	mode() 	    Mode of values
6 	std() 	    Standard Deviation of the Values
7 	min() 	    Minimum Value
8 	max() 	    Maximum Value
9 	abs() 	    Absolute Value
10 	prod() 	    Product of Values
11 	cumsum() 	Cumulative Sum
12 	cumprod() 	Cumulative Product
    describe()

https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.sum.html
https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.mean.html
https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.std.html
https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.describe.html

https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.count.html
https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.median.html
https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.mode.html
https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.prod.html
https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.cumsum.html
https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.cumprod.html
"""
import pandas as pd

d = {'Name': pd.Series(['Tom', 'James', 'Ricky', 'Vin', 'Steve', 'Smith', 'Jack',
                        'Lee', 'David', 'Gasper', 'Betina', 'Andres']),
     'Age': pd.Series([25, 26, 25, 23, 30, 29, 23, 34, 40, 30, 51, 46]),
     'Rating': pd.Series([4.23, 3.24, 3.98, 2.56, 3.20, 4.6, 3.8, 3.78, 2.98, 4.80, 4.10, 3.65])}

df = pd.DataFrame(d)
print(df)

print()
print(df.sum())  # Returns the sum of the values for the requested axis. By default, axis is index (axis=0)
print()
print(df.sum(1))  # axis=1

print()
print(df.mean())  # Returns the average value

print()
print(df.std())  # Returns the Bressel standard deviation(标准差)of the numerical columns

# Summarizing Data
print()
print(df.describe())

# 'include' : pass necessary information regarding what columns need to be considered for summarizing
print()
print(df.describe(include=['object']))  # Summarizes String columns
print()
print(df.describe(include=['number']))  # Summarizes Numeric columns
print()
print(df.describe(include='all'))  # Summarizes all columns together
