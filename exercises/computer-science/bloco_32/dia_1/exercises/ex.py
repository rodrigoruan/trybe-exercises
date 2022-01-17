def find_highest(a, b):
  return max(a, b)

def arithmetic_mean(numbers):
  total = 0
  sum = 0
  for number in numbers:
    sum += number
    total += 1
  return sum / total

print(arithmetic_mean([1,2,3]))
