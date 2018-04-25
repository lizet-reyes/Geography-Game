var button = document.getElementById("submitState");
button.addEventListener("click", () => {
    document.getElementById('solutions').textContent = submitState()
});

function submitState() {
    var US = document.getElementById('U.S.').value;
    return US;
}


