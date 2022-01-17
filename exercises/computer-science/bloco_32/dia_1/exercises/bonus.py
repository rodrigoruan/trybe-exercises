def find_lowest_element(numbers):
  return min(numbers)

def print_triangle(n):
  n += 1
  for i in range(n, 0, -1):
    print('*' * (n - i))

print(print_triangle(6))