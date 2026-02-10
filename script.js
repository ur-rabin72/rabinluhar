function clickNo() {
    document.getElementById("question").innerText =
        "Please click YES 😭❤️";
}

function clickYes() {
    document.getElementById("buttons").style.display = "none";
    document.getElementById("question").innerText =
        "She said YES 💖😍";

    document.getElementById("surprise").classList.remove("hidden");

    document.getElementById("music").play();
}
