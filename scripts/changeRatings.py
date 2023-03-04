import pandas as pd
import random
def func(path):
    file = pd.read_csv(path)
    file['price'].fillna('111', inplace = True)
    for index in file.index:
        print(file['price'][index])
        file['price'][index] = random.randint(1, 5)
    print(file)
    file.to_csv(path)

func(r'michelin/one-star-michelin-restaurants.csv')
func(r'michelin/two-stars-michelin-restaurants.csv')


