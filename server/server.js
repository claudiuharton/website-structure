const express = require("express");

const app = express();

app.use(express.static("public"));

app.listen(80, () => {
  console.log(`Check website on http://localhost:80`);
});
