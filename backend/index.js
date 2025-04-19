const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const jokes = [
  {
    content:
      "Why don’t scientists trust atoms? Because they make up everything!",
  },
  {
    content:
      "Why did the math book look sad? Because it had too many problems.",
  },
  {
    content:
      "I told my computer I needed a break, and it said 'No problem, I’ll go to sleep.'",
  },
  {
    content:
      "Parallel lines have so much in common. It’s a shame they’ll never meet.",
  },
];

app.get("/api/joke", (req, res) => {
  const random = Math.floor(Math.random() * jokes.length);
  res.json(jokes[random]);
});

app.listen(3000, () => console.log("Backend running on http://localhost:3000"));
