# n = 5

# total = 1

# for i in range(n): 
#   total *= (i + 1)

# print(total)

ratings = [6, 8, 5, 9, 10]

new_ratings = []

for rating in ratings:
  new_ratings.append(rating * 10)

print(new_ratings)

for rating in new_ratings:
  if rating % 3 == 0:
    print(rating, 'Multiplo de 3')