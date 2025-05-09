
const greeting = document.getElementById('greeting');
    const hour = new Date().getHours();
    if (hour < 12) {
      greeting.textContent = "Good morning!";
    } else if (hour < 18) {
      greeting.textContent = "Good afternoon!";
    } else {
      greeting.textContent = "Good evening!";
    }


     (function() {
      var likeBtn = document.getElementById('likeBtn');
      var count = 0;
      likeBtn.addEventListener('click', function(){
        count++;
        likeBtn.textContent = 'Like (' + count + ')';
      });
    })();


     document.getElementById('contactForm').addEventListener('submit', function(event) {
      const name = this.name.value.trim();
      const email = this.email.value.trim();
      const message = this.message.value.trim();
      if (!name || !email || !message) {
        event.preventDefault();
        alert('Please fill out all required fields: Name, Email, and Message.');
        if (!name) {
          this.name.focus();
        } else if (!email) {
          this.email.focus();
        } else {
          this.message.focus();
        }
      }
    });