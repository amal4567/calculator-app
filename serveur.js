const express = require('express');
const app = express();

app.get('/add/:a/:b', (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  res.json({ result: a + b });
});

app.get('/sub/:a/:b', (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  res.json({ result: a - b });
});

app.get('/mul/:a/:b', (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  res.json({ result: a * b });
});

app.get('/divide/:a/:b', (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);

  if (b === 0) {
    return res.status(400).json({ error: 'Division by zero' });
  }

  res.json({ result: a / b });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

module.exports = app;