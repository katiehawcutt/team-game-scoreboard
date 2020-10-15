//Using the DOM to access the button and storing in a variable.
const getScoresButton = document.querySelector("#getScoresButton");

//Adding a event listener to when th ebutton is clicked.
getScoresButton.addEventListener("click", getAllScores);

//Creates a function to get all scores from the database.
async function getAllScores(){
    const response = await fetch("http://localhost:3000/scoreboard")
    const {payload} = await response.json();
    console.log(payload.rows);
};

