const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Store contact form submissions in a JSON file
app.post("/api/contact", (req, res) => {
  const contact = req.body;
  const filePath = path.join(__dirname, "contacts.json");
  let contacts = [];
  if (fs.existsSync(filePath)) {
    contacts = JSON.parse(fs.readFileSync(filePath));
  }
  contacts.push(contact);
  fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2));
  res.json({ success: true });
});

// Serve images from a folder called "public/images"
app.use("/images", express.static(path.join(__dirname, "public/images")));

app.listen(5000, () => console.log("Server running on port 5000"));
