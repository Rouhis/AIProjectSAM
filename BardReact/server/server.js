// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 5500; // The port on which the server will run

app.use(cors());

// Initialize Bard asynchronously
let bot;
(async () => {
  const bardModule = await import('googlebard');
  const Bard = bardModule.Bard;
  // Replace with your actual cookies for Bard
  const cookies = '__Secure-1PSID=<cwi4m9kbh1d3ERgR-DMfeooDhcOWEsTEXxD_kgRro9tEjip6quQPsJVg4EQpMNdwRmD5ew.>';
  bot = new Bard(cookies);
  console.log("Vittu")
})();

// Endpoint to get a response from Bard
app.get('/ask-bard', async (req, res) => {
    console.log("Vittu perkele")
  const question = req.query.question; // Get the question from query params
  console.log(question)
  if (!question) {
    return res.status(400).send('No question provided');
  }

  if (!bot) {
    return res.status(503).send('Bard is not initialized yet');
  }

  try {
    const response = await bot.ask(question);
    res.json({ answer: response });
  } catch (error) {
    console.error('Error asking Bard:', error);
    res.status(500).send('Error getting response from Bard');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
