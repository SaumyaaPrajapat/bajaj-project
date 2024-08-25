const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// POST method
app.post("/bfhl", (req, res) => {
  const { data } = req.body;

  if (!data || !Array.isArray(data)) {
    return res
      .status(400)
      .json({ is_success: false, message: "Invalid input" });
  }

  const numbers = data.filter((item) => !isNaN(item)).map(Number); // Convert to numbers
  const alphabets = data.filter((item) => isNaN(item));

  const highestLowercaseAlphabet =
    alphabets
      .filter((char) => char.length === 1 && char === char.toLowerCase())
      .sort((a, b) => b.localeCompare(a))[0] || null;

  const response = {
    is_success: true,
    user_id: "saumyaa_p_20032004",
    email: "saumyaap2034@gmail.com",
    roll_number: "ABCD123",
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet
      ? [highestLowercaseAlphabet]
      : [],
  };

  res.json(response);
});

// GET method
app.get("/bfhl", (req, res) => {
  res.json({ operation_code: 1 });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
