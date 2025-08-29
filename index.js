// index.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // parse JSON bodies

const PORT = process.env.PORT || 3000;

// ------------ EDIT THESE BEFORE DEPLOYING ------------
const FULL_NAME = 'john_doe';     // must be lowercase
const DOB_DDMMYYYY = '17091999';  // ddmmyyyy
const EMAIL = 'john@xyz.com';
const ROLL_NUMBER = 'ABCD123';
// -----------------------------------------------------

function isIntegerString(s) {
  return /^-?\d+$/.test(s);
}

function alternatingCapsReverse(str) {
  const reversed = str.split('').reverse().join('');
  let out = '';
  for (let i = 0; i < reversed.length; i++) {
    out += (i % 2 === 0) ? reversed[i].toUpperCase() : reversed[i].toLowerCase();
  }
  return out;
}

// ✅ GET route (for browser check)
app.get("/bfhl", (req, res) => {
  res.json({ message: "BFHL API is running. Use POST /bfhl with JSON body." });
});

// ✅ POST route (main logic)
app.post('/bfhl', (req, res) => {
  try {
    const data = req.body && req.body.data;
    if (!Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        message: "Invalid request: 'data' field must be an array."
      });
    }

    const even_numbers = [];
    const odd_numbers = [];
    const alphabets = [];
    const special_characters = [];
    let sum = 0;
    let alphaConcat = '';

    for (const item of data) {
      if (typeof item === 'number') {
        const num = item;
        sum += num;
        if (num % 2 === 0) even_numbers.push(String(item));
        else odd_numbers.push(String(item));
        continue;
      }

      if (typeof item === 'string') {
        const t = item.trim();
        if (t === '') {
          special_characters.push(item);
        } else if (isIntegerString(t)) {
          const num = parseInt(t, 10);
          sum += num;
          if (num % 2 === 0) even_numbers.push(t);
          else odd_numbers.push(t);
        } else if (/^[A-Za-z]+$/.test(t)) {
          alphabets.push(t.toUpperCase());
          alphaConcat += t;
        } else {
          special_characters.push(item);
        }
        continue;
      }

      special_characters.push(String(item));
    }

    const concat_string = alphaConcat.length ? alternatingCapsReverse(alphaConcat) : '';

    const result = {
      is_success: true,
      user_id: `${FULL_NAME}_${DOB_DDMMYYYY}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: String(sum),
      concat_string
    };

    return res.status(200).json(result);
  } catch (err) {
    console.error('Error in /bfhl:', err);
    return res.status(500).json({ is_success: false, message: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`bfhl API listening on port ${PORT}`);
});
