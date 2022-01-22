with open("students.txt", mode="r") as file:
  students = file.read().split('\n')

  reprovedStudents = list()
  
  for student in students:
    student, score = student.split(' ')
    if int(score) < 6:
      reprovedStudents.append((f"{student} {score}"))
  
  print(reprovedStudents)