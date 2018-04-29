var button = document.getElementById("submitState");
button.addEventListener("click", () => {
    document.getElementById('feedback').textContent = submitState()
});

function submitState() {
    var US = document.getElementById('U.S.').value;
    var datainfo = document.getElementById('answer').textContent;
    if (US === datainfo) {
        return "Correct";
    } else
        return "Incorrect";

}
