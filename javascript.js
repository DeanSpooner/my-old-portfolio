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
