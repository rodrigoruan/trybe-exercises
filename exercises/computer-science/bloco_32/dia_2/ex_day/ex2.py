import random

list_of_words = ["paralelepipedo", "morango", "cachorro", "escudo"]
index = random.randint(0, len(list_of_words) - 1)

selected_word = list_of_words[index]
scrambled_word = "".join(random.sample(selected_word, len(selected_word)))

print(f"Try to guess the word: {scrambled_word}")

for i in range(3):
  guess = input("type here: ")
  if guess == selected_word:
    print("Congratulations!!! you won!")
    break
  else:
    print(f"Wrong guess, try more {2 - i} times")