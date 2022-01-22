numbers = input("Type all numbers splited by spaces: ")

total = 0

splited_numbers = numbers.split(' ')

for argument in splited_numbers:
  if argument.isdigit():
    total += int(argument)
  else:
    print(f"{argument} is not a number")

print(total)
