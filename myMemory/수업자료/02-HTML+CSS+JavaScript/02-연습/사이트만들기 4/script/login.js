let modal = document.getElementById("modal");

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}

function showModal() {
    modal.style.display = "block";
}

function hideModal() {
    modal.style.display = "none";
}