# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

- [x] Create Directory
- [x] Use npm init --yes
- [x] Use npm install express
- [x] Source nodemon into package.json
- [x] Create gitignore.txt

- [x] In server.js, require express and set PORT

- [x] Create input field for task in html
- [x] Create `Add Task` button

- [x] Create database in Postico

- [x] Create POST route
- [x] Use an $.ajax request in client.js
- [x] Use an app.post in server.js

- [x] Create GET route
- [x] Use an $.ajax request in client.js
- [x] Use an app.get in server.js
- [x] Loop through each object upon page load
- [x] Use .append to update the DOM
- [] Find way to display only the task string, not the whole object
- [x] Empty input field on click 

- [x] Create `routes` folder
- [x] Create router file, task.router.js
- [x] Require express 


- [x] Install pg, npm install pg
- [] Investigate the gitignore file, seems like it's not ignoring node_modules

- [x] When task is added with `Add Task` button, update DOM to create 
      a `Complete` and `Delete` button for each task
- [] `Complete` button should change the background-color of the task container 
      to represent it's completion (CSS that hooks into client logic) Search how to change a CSS using jquery. .addClass()
- [] `Complete` button should display as 'checked off' when clicked (client.js triggers a CSS edit)
- [] When `Complete` button is clicked, database should be updated to reflect change of status
- [] Call the Update route when `Complete` button is clicked

- [] Update route needs to be created with PUT route 
- [] $.ajax request on client side 
- [] router.put function on task.router.js side
- [] Use Postico to write SQL UPDATE code
- [] Look at creating another table row in database to store completed status
- [] Tell router.put what to change "completed" to
- [] 

- [] Delete route similar to Update route with 
      different syntax

















* Create a front end experience that allows a user to create a Task.
* When the Task is created, it should be stored inside of a database (SQL)
* Whenever a Task is created the front end should refresh to show all tasks that need to be completed.
* Each Task should have an option to 'Complete' or 'Delete'.
* When a Task is complete, its visual representation should change on the front end. For example, the background of the task container could change from gray to green. The complete option should be  'checked off'. Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete.
* Whether or not a Task is complete should also be stored in the database.
* Deleting a Task should remove it both from the front end as well as the Database.

### Styling

Use CSS styling to move the aesthetic of the page beyond the vanilla HTML look:
  - background color of the page
  - font family and size
  - text color & or background color of tasks *to show whether or not they have been completed*

### Approach

We would recommend you spend some time thinking about how to approach this problem. Think through all the logic that will be needed prior to writing any code. Take your time, relax, remember that impostor syndrome is real, and that you are capable of knocking this out of the park!

### Create a Database

Be sure to create a new database through Postico. Use the name `weekend-to-do-app`. You will need to use this name in your database connection configuration on your server.

### Database Structure

Please include a `database.sql` text file in your repo that includes all of your `CREATE TABLE` queries. This is so we can re-create your database while testing your app.



Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
