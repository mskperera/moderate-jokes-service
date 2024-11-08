const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@admin.com" && password === "admin123") {
    const token = jwt.sign({ email, role: "admin" }, process.env.JWT_SECRET, {
      expiresIn: "1d", // Token expires in 1 day
    });

    return res.json({ token });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
};
