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

def highest_length_name(names):
  highest_name = ""
  highest_length = 0
  for name in names:
    length = len(name)
    if(length > highest_length):
      highest_name = name
      highest_length = length
  return highest_name

def calculate_amount_of_paint(area):
  total_paint = area / 3
  total = 0
  while(total_paint > 0):
    total_paint -= 18
    total += 1
  return (total, total * 80.00)
  
def type_of_triangle(a, b, c):
  if a == b == c:
    return "Triangulo Equilatero"
  elif a == b or a == c or b == c:
    return "Triangulo Isosceles"
  else:
    return "Triangulo Escaleno"

print(type_of_triangle(10, 32, 3))