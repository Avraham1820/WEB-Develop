//buttons:
var p1_btn = document.querySelector("#p1_btn");
var p2_btn = document.querySelector("#p2_btn");
var rst_btn = document.querySelector("#rst_btn");
//input
var InputLimit = document.querySelector("#InputLimit");
//display
var p1_display = document.querySelector("#p1_display");
var p2_display = document.querySelector("#p2_display");
var limit_display = document.querySelector("#limit_display");
//compute
var p1_score = 0;
var p2_score = 0;
var limit_score = 5;
var gameOver = false;

p1_btn.addEventListener("click", function() {
    if (!gameOver) {
        p1_score += 1;
        if (p1_score === limit_score) {
            gameOver = true;
            p1_display.classList.add("winner");
        }
        p1_display.textContent = p1_score;
    }
})

p2_btn.addEventListener("click", function() {
    if (!gameOver) {
        p2_score += 1;
        if (p2_score === limit_score) {
            gameOver = true;
            p2_display.classList.add("winner");
        }
        p2_display.textContent = p2_score;
    }
})

rst_btn.addEventListener("click", function() {
    reset();
})

InputLimit.addEventListener("change", function() {

    limit_display.textContent = this.value;
    limit_score = Number(this.value);
    if (limit_score < 1) {
        limit_display.textContent = "1";
        limit_score = 1;
    }
    reset();
})

function reset() {
    p1_score = 0;
    p2_score = 0;
    p1_display.textContent = p1_score;
    p2_display.textContent = p2_score;
    gameOver = false;
    p1_display.classList.remove("winner");
    p2_display.classList.remove("winner");
}