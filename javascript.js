let toplink = document.getElementsByClassName('toplink');

      for (let i = 0; i < toplink.length; i++) {
        toplink[i].addEventListener("mouseenter", function() {
          this.classList.add('link-select');
        });
        toplink[i].addEventListener("mouseleave", function() {
          this.classList.remove('link-select');
        })
      }

let box = document.getElementsByClassName('box');

      for (let i = 0; i < box.length; i++) {
        box[i].addEventListener("mouseenter", function() {
          this.classList.add('box-select');
        });
        box[i].addEventListener("mouseleave", function() {
          this.classList.remove('box-select');
        })
      }

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