import pandas as pd
file = pd.read_csv(r'michelin\three-stars-michelin-restaurants.csv')
file.drop(['url', 'region', 'zipCode', 'city', 'year'], axis = 1, inplace=True)
print(file)
file.to_csv(r'michelin\three-stars-michelin-restaurants.csv')

