def find_highest(a, b):
  return max(a, b)

def arithmetic_mean(numbers):
  total = 0
  sum = 0
  for number in numbers:
    sum += number
    total += 1
  return sum / total

def print_squares(number):
  copy_num = number
  while copy_num > 0:
    copy_num -= 1
    print('*' * number)


