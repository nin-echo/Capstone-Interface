// flip cards
var card = document.getElementsByClassName("card");
card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');
});

function flipCards() {
    var card = document.querySelector('.card');
    card.classList.toggle('is-flipped');

    var transButton = document.getElementById('spanText');
    if (transButton.innerHTML === "Bar") { transButton.innerHTML = "Pie"; }
    else {
        transButton.innerHTML = "Bar";
    }
}

function mainStart() {
    document.getElementById('backTexts').style.marginTop = -20;
    loadComments();
    totalData();
}

// scroll Functions
function scrollToBottom() {
    window.window.scrollTo(0, document.getElementsByClassName("above-box")[0].scrollHeight);
    document.getElementsByClassName("backToTop")[0].style.visibility = "visible";
}
function scrollToTop() {
    window.window.scrollTo(0, 0);
    document.getElementsByClassName("backToTop")[0].style.visibility = "hidden";
}