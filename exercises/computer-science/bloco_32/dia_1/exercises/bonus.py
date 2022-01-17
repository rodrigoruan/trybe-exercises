def find_lowest_element(numbers):
  return min(numbers)

def print_triangle(n):
  n += 1
  for i in range(n, 0, -1):
    print('*' * (n - i))

def sum_up_to(n):
  return n * (n + 1) / 2

def discount(litters, n, price):
  return (litters * price) - (litters * ((price / 100) * n))

def calculate_discount(litters, type_c_a):
  if type_c_a == 'G':
    return discount(litters, 6 if litters > 20 else 4, 2.50)
  if type_c_a == 'A':
    return discount(litters, 5 if litters > 20 else 3, 1.90)

print(calculate_discount(20, 'A'))