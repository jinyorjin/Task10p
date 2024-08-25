const express = require("express");
const formData = require("form-data");
const Mailgun = require("mailgun.js");
const path = require("path");
const cors = require("cors");
const app = express();
const port = 3012;

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY,
});

function sendWelcomeEmail(email) {
  console.log("sendWelcomeEmail function called with email:", email);
  const data = {
    from: `Excited User <mailgun@${process.env.MAILGUN_DOMAIN}>`,
    to: email,
    subject: "Welcome to DEV@Deakin!",
    text: "Welcome to DEV@Deakin.",
    html: "<strong>Welcome to DEV@Deakin</strong>",
  };

  mg.messages
    .create(process.env.MAILGUN_DOMAIN, data)
    .then((body) => {
      console.log("Email sent successfully:", body);
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/subscribe", (req, res) => {
  const email = req.body.email;
  console.log("Received subscription request for email:", email);
  sendWelcomeEmail(email);
  res.send("Welcome email sent to " + email + "!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
