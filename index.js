const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// Serve files
app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});