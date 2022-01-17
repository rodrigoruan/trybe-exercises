def find_lowest_element(numbers):
  return min(numbers)

def print_triangle(n):
  n += 1
  for i in range(n, 0, -1):
    print('*' * (n - i))

def sum_up_to(n):
  return n * (n + 1) / 2

print(sum_up_to(5))