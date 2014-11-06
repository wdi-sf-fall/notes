## In class practice

For this exercise, we'd like you to strengthen your Rails console skills. This exercise is going to be very familiar to the SQL lab, where we'll ask you to create a model and then write out the console commands you would use to execute these queries

### To Start

1. Create a model called Student, that has a first_name, last_name and age
2. Don't forget to run your migrations

### Tasks to create

1. Using the new/save syntax, create a student, first and last name and an age 
2. Save the student to the database
3. Using the find/set/save syntax update the student's first name to taco
4. Delete the student (where first_name is taco)
5. Validate that every Student's last name is unique
6. Validate that every Student has a first and last name that is longer than 4 characters
7. Validate that every first and last name cannot be empty
7. Combine all of these individual validations into one validation (using validate and a hash) 
8. Using the create syntax create a student named John Doe who is 33 years old
9. Show if this new student entry is valid (this command returns true or false)
10. Show the number of errors for this student instance
11. In one command, Change John Doe's name to Jonathan Doe 
13. Save Jonathan Doesmith
15. Find all of the Students
16. Find the student with an ID of 128 and if it does not exist, make sure it returns nil and not an error
17. Find the first student in the table
18. Find the last student in the table
19. Find the student with the last name of Doesmith
21. Find all of the students and limit the search to 5 students, starting with the 2nd student and finally, order the students by first_name ascending.
20. Delete Jonathan Doe



