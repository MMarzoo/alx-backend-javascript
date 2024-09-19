const express = require('express');

const app = express();
const port = 7865;

app.get('/', (req, res) => {
  res.end('Welcome to the payment system');
});

// Export the app for testing
module.exports = app;

// Only start listening if the file is run directly
if (require.main === module) {
  app.listen(port, () => {
    console.log('API available on localhost port 7865');
  });
}
