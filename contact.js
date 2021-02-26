let submit = document.getElementById("submit-button")

let clear = document.getElementById("clear-button");

function submitFunc() {
    alert("Your name: " + document.getElementById("user-name").value + "\n\nYour email: " + document.getElementById("user-email").value
    + "\n\nYour message: " + document.getElementById("user-message").value);
    return
    }

function clearFunc() {
    document.getElementById("user-name").value = "";
    document.getElementById("user-email").value = "";
    document.getElementById("user-message").value = "";
    return;
}    

submit.addEventListener("click", submitFunc, false);

clear.addEventListener("click", clearFunc, false);
