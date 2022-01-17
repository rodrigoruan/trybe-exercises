trybe_course = ["Introducao", "Front-end", "Back-end"]

trybe_course.append("Ciencia da Computacao")

print(trybe_course)

trybe_course[0] = "Fundamentos"

print(trybe_course)

test_set = set()
test_set.add('Rodrigo')

print(test_set)

info = {
  "personagem": "Margarida",
  "origem": "Pato Donald",
  "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

# print(info.origem)

info["recorrente"] = "Sim"

print(info)

del info["origem"]

print(info)