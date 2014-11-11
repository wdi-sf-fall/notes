## back_to_college

# Task 

- We're going to take a step back from auth and focus on setting up a many to many. 
- This app mimics a college course enrollment system. Students can see a list of courses and the students that are enrolled in them. At the same time students can enroll for many different courses....this means we need a many to many

## Getting started

- Fork and clone the sample code and run `rake db:create`. 
- Before you migrate, set up the correct associations in your model. Also make sure that there is a name for each course and student (validate presence) and that the name for each student is unique 
- Run your migrations and test that you have correctly set up your associations in rails console
- For this app, the controllers and views are generated for you so move to the routes.
- You will see here that you need to start working on the students routes

## Next steps

- Get full CRUD working for Students and Courses. For now, this means that anyone can add, see, update and delete any course or any student. 
- Make sure to include the correct parameters for courses and students
- When courses and students are created, updated or deleted, include a flash message
- If there are any errors when creating a course or a student, be sure to display them.

## Finishing up

- Once you have full CRUD, allow students to enroll for multiple courses. 
- The student should see a list of all of the courses as checkboxes and choose whichever ones they want to sign up for
- If a Student has already signed up for the course, ensure there are no duplicates
- If a student unchecks an existing course, make sure to remove it from the enrollments table
- __this is going to be challenging__ so do not get discouraged if you can not solve it - we will review how this is done.
- If you have done this, for each student, show their enrollments and for each course, show their students.


### Bonus

- Pat yourself on the back if you get here, it's been a long day :)



