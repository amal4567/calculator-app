const express = require("express");
const path = require("path");

const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Routes API GET
app.get("/api/add/:a/:b", (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: "Invalid numbers" });
  }

  res.json({ operation: "add", result: a + b });
});

app.get("/api/sub/:a/:b", (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: "Invalid numbers" });
  }

  res.json({ operation: "sub", result: a - b });
});

app.get("/api/mul/:a/:b", (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: "Invalid numbers" });
  }

  res.json({ operation: "mul", result: a * b });
});

app.get("/api/div/:a/:b", (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: "Invalid numbers" });
  }

  if (b === 0) {
    return res.status(400).json({ error: "Division by zero" });
  }

  res.json({ operation: "div", result: a / b });
});

// Route API POST
app.post("/api/calculate", (req, res) => {
  const { a, b, op } = req.body;

  const x = Number(a);
  const y = Number(b);

  if (Number.isNaN(x) || Number.isNaN(y)) {
    return res.status(400).json({ error: "Invalid numbers" });
  }

  switch (op) {
    case "+":
      return res.json({ operation: "add", result: x + y });

    case "-":
      return res.json({ operation: "sub", result: x - y });

    case "*":
      return res.json({ operation: "mul", result: x * y });

    case "/":
      if (y === 0) {
        return res.status(400).json({ error: "Division by zero" });
      }
      return res.json({ operation: "div", result: x / y });

    default:
      return res.status(400).json({ error: "Invalid operation" });
  }
});

// Route pour la page principale
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Lancement du serveur
if (require.main === module) {
  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
}

module.exports = app;