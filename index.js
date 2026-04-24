// index.js - Demo de vulnerabilidades para CodeQL
const express = require('express');
const app = express();

// VULNERABILIDAD 1: uso de eval() con input del usuario
app.get('/eval', (req, res) => {
  const input = req.query.code;
  const result = eval(input); // ⚠️ Code injection
  res.send(`Resultado: ${result}`);
});

// VULNERABILIDAD 2: path traversal
const fs = require('fs');
const path = require('path');
app.get('/file', (req, res) => {
  const filename = req.query.name;
  const filePath = path.join(__dirname, filename); // ⚠️ Path traversal
  res.send(fs.readFileSync(filePath, 'utf8'));
});

app.listen(3000, () => console.log('Server running on port 3000'));
