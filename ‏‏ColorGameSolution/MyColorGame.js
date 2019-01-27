//picked objects------------------------------------------------
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDidplay = document.querySelector("#messageDisplay");
var headerDisplay = document.querySelector("#header");
var resetButton = document.querySelector("#resetButton");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");
var body = document.querySelector("body");
var hardLevelSq = document.querySelectorAll(".hardLevelSq");

//global vars-------------------------------------------
var colors;
var pickedColor;
var level = 6;
//code--------------------------------------------------------------
init();



//functions------------------------------------------------------
function init() {
    reset(level);
    setupModeButtons();
    setupSquares();
}

function setupSquares() {
    //give color to each square and add a clickEvent to each square.
    for (var i = 0; i < squares.length; i++) {
        //give color to each square
        squares[i].style.background = colors[i];
        //add event to each square
        squares[i].addEventListener("click",
            function() {

                var clickedColor = this.style.background;

                if (clickedColor === pickedColor) {
                    changeAllSquaresColorToPickedColor(squares);
                    headerDisplay.style.background = clickedColor;
                    messageDidplay.textContent = "Correct!";
                    resetButton.textContent = "Play Again?";
                } else {
                    this.style.background = "#232323";
                    messageDidplay.textContent = "Try Again"
                    resetButton.textContent = "New Colors";
                }

            })
    }
}


function setupModeButtons() {
    easyButton.addEventListener("click", function() {
        level = 3;
        easyButton.classList.add("selected");
        hardButton.classList.remove("selected");
        hardLevelSq.forEach(function(sq) { sq.classList.add("hideElement"); });
        reset();
    });

    hardButton.addEventListener("click", function() {
        level = 6;
        easyButton.classList.remove("selected");
        hardButton.classList.add("selected");
        hardLevelSq.forEach(function(sq) { sq.classList.remove("hideElement"); });
        reset();
    });

    resetButton.addEventListener("click", function() {
        resetButton.textContent = "New Colors";
        reset();
    });
}

function refreshColorsOnSquares() {
    //for (var i = 0; i < squares.length; i++) {
    for (var i = 0; i < level; i++) {
        //give color to each square
        if (colors[i]) {
            squares[i].style.background = colors[i];
        }
    }
}

function reset() {
    colors = generateRandomColorsToColorsArr(level);
    refreshColorsOnSquares();
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDidplay.textContent = "";
    // headerDisplay.style.background = body.style.background;
    // headerDisplay.style.background = "rgb(0, 40, 255)";
    headerDisplay.style.background = "steelblue";

}


function changeAllSquaresColorToPickedColor(arr) {
    resetButton.textContent = "Play Again?";

    for (var i = 0; i < arr.length; i++) {
        arr[i].style.background = pickedColor;
    }
}
//pick a random color from the arr
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColorsToColorsArr(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}