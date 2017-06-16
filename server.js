const express = require('express');
const app = module.exports = express();
const port = process.env.PORT || 80;

// Serve files
app.use(express.static(__dirname ));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});