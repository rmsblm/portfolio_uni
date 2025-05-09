<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Web Lab</title>
  <style>
    .skill-card {
      padding: 10px;
      margin: 5px;
      background-color: lightgray;
    }
    .highlight {
      background-color: lightblue;
    }
  </style>
</head>
<body>
  <header>
    <h1>Welcome to My Web Page</h1>
    <p id="greeting"></p> <!-- Exercise 1 -->
  </header>

  <main>
    <!-- Exercise 2 -->
    <button id="toggleSkillsBtn">Toggle Skill Colors</button>
    <section id="skills">
      <div class="skill-card">HTML</div>
      <div class="skill-card">CSS</div>
      <div class="skill-card">JavaScript</div>
    </section>

    <!-- Exercise 3 -->
    <h2>Contact Us</h2>
    <form id="contactForm">
      <input type="text" id="name" placeholder="Name"><br>
      <input type="email" id="email" placeholder="Email"><br>
      <textarea id="message" placeholder="Message"></textarea><br>
      <button type="submit">Submit</button>
    </form>

    <!-- Exercise 4 -->
    <h2>Watch Our Video</h2>
    <video width="320" height="240" controls>
      <source src="your-video.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video><br>
    <button id="likeBtn">Like</button> <span id="likeCount">0</span> Likes
  </main>

  <script>
    // Exercise 1: Greeting based on time
    const greeting = document.getElementById('greeting');
    const hour = new Date().getHours();
    if (hour < 12) {
      greeting.textContent = "Good morning!";
    } else if (hour < 18) {
      greeting.textContent = "Good afternoon!";
    } else {
      greeting.textContent = "Good evening!";
    }

    // Exercise 2: Toggle skill card background color
    const toggleBtn = document.getElementById('toggleSkillsBtn');
    toggleBtn.addEventListener('click', () => {
      document.querySelectorAll('.skill-card').forEach(card => {
        card.classList.toggle('highlight');
      });
    });

    // Exercise 3: Form validation
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if (!name || !email || !message) {
        e.preventDefault();
        alert("Please fill out all fields before submitting.");
      }
    });

    // Exercise 4: Like button counter
    let likeCount = 0;
    document.getElementById('likeBtn').addEventListener('click', () => {
      likeCount++;
      document.getElementById('likeCount').textContent = likeCount;
    });
  </script>
</body>
</html>
