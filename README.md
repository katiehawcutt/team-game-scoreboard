# Energiser Score Tracker

We will be building our first full stack app. It will be a chance to embed everything we've learnt so far and practice breaking down problems into solvable chunks.

## Requirements

- Must use a Database for persistent storage
- Must use the model pattern to allow easy interaction with the data
- Must use an REST API server to manage requests and serve back data
- Must have a front end which allows users to at least view the data

The rest is up to you!

# OUR PLAN

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
