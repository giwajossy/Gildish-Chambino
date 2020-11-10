
function myFunction() {
    location.reload();
}

function playButton() {
    
    setTimeout(myFunction, 2000);
    

    var dice = [1, 2, 3, 4, 5, 6];
    var lengthOfDice = dice.length;
    var randomValueForPlayerOne = dice[Math.floor(Math.random() * lengthOfDice)];
    var randomValueForPlayerTwo = dice[Math.floor(Math.random() * lengthOfDice)];
    
    
    document.querySelector(".left h3 span").textContent = randomValueForPlayerOne;
    document.querySelector(".right h3 span").textContent = randomValueForPlayerTwo;
    document.querySelector(".left img").setAttribute("src", "assets/images/"+randomValueForPlayerOne+".png");
    document.querySelector(".right img").setAttribute("src", "assets/images/"+randomValueForPlayerTwo+".png");

    if (randomValueForPlayerOne > randomValueForPlayerTwo) {
        document.getElementById("status").textContent = "Player one Wins";
        document.getElementById("author").textContent = "Congratulation! Play again";
        document.getElementsByClassName("left")[0].style.border = ".3em solid rgba(192,57,43,1)";
    } else if (randomValueForPlayerTwo > randomValueForPlayerOne) {
        document.getElementById("status").textContent = "Player two Wins";
        document.getElementById("author").textContent = "Congratulation! Play again";
        document.getElementsByClassName("right")[0].style.border = ".3em solid rgba(192,57,43,1)";
    } else {
        document.getElementById("status").textContent = "Tie Game";
        document.getElementById("author").textContent = "Play again";
    }
    
    

    // var playerOne = document.querySelector(".left img").setAttribute("src");
    // var playerTwo = document.querySelector(".right img").setAttribute("src");

}







