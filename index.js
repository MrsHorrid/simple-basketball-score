let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let hscore = 0;
let gscore = 0;

homeScore.textContent = hscore;
guestScore.textContent = gscore;

function plusOneHome()
{
    console.log("plus one");
    hscore += 1;
    homeScore.textContent = hscore;
}
function plusTwoHome()
{
    console.log("plus two");
    hscore += 2;
    homeScore.textContent = hscore;
}
function plusThreeHome()
{
    console.log("plus three");
    hscore += 3;
    homeScore.textContent = hscore;
}


function plusOneGuest()
{
    console.log("plus one");
    gscore += 1;
    guestScore.textContent = gscore;
}
function plusTwoGuest()
{
    console.log("plus one");
    gscore += 2;
    guestScore.textContent = gscore;
}
function plusThreeGuest()
{
    console.log("plus one");
    gscore += 3;
    guestScore.textContent = gscore;
}

function resetGame()
{
    gscore = 0;
    hscore = 0;
    guestScore.textContent = gscore;
    homeScore.textContent = hscore;
}


