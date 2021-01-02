# Team Score Tracker

![Our SoC energiser score tracker](./public/Images/socEnergizerScoreboard.PNG)

#### School of Code Bootcamp - Hackathon Week 4

###### October 2020

_Our Week 4 hackathon challenge was to build our first full stack app using Express and a Postgres database. It was a chance to embed everything we'd learnt so far on the bootcamp and great practice of breaking down problems into solvable chunks. I'm so happy that I was able to make my first full-stack app with no help after just 4 weeks on the bootcamp - it feels awesome!_

### Hackathon Requirements

- Must use a Database for persistent storage
- Must use the model pattern to allow easy interaction with the data
- Must use an REST API server to manage requests and serve back data
- Must have a front end which allows users to at least view the data

### Main Learning Points:

- Making a detailed plan before we started doing any coding was essential and meant that we keep on track throughout the hackathon
- Reading errors messages and deciphering them! I'm learning to enjoy getting error messages and the problem solving that comes with fixing the bugs!
- Creating and building an Express app
- Using environment variables
- Getting more confident with connecting the backend and frontend together - I'm getting much better and quicker at this!
- Using PostgreSQL and creating a database with Heroku
- Writing scripts for our database, writing models and routes (`GET`, `POST` and `DELETE` all) for our backend functionality
- Displaying the data we received from the backend on the frontend. I was really pleased with how the data was presented in the table.

### Stretch Goals:

- Add functionality to delete rows by ID

# START PROJECT

- ✔️Create folder and js file
- ✔️npm init
- ✔️npm i express
- ✔️express generator npx
- ✔️install postrgres
- ✔️create database
- ✔️index - pool file
- ✔️.env file and gitignore
- ✔️make scripts to create table, dropTable, viewTable, populateTable
- ✔️run createTable and populate table
- ✔️set up paths in app.js
- ✔️set up routes - get and post request
- create models folder and write functions in a file called scoreBoard
- test routes / database using postman

# BONUS

- add delete and put requests
- jest?

# DATABASE TABLE

✔️Table columns will be id, date, game, team1score, team2score, team3score, team4score

# HTML/CSS page

- Title of page - SoC Energizer Scoreboard!
- Create a table with columns of Date, Game, Team 1, Team 2, Team 3, Team 4
- At the bottom of the table there will be the running total of each teams score
- Have an input section at the top of the page where you can add new data to the table
- Save payload.rows to a variable called data.
- Use an array method on data to get the information out (forEach)
- Create td element
- forEach item property assign it to the innerText of a td element.
