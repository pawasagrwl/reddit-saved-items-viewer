const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080; // Default port to 8080 if not provided by environment

// Read the target URL from the environment variable
const TARGET_URL = process.env.TARGET_URL;

if (!TARGET_URL) {
  console.error("No TARGET URL provided in the environment");
  process.exit(1);
}

// Redirect all traffic to the target URL
app.get('*', (req, res) => {
  res.redirect(TARGET_URL);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
