const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Your Bard AI cookie
const bardCookie = 'dAi4mwhAFGfRhuR9vg9-wScmQ1HPUCZ7KKB76U3jhiWRCoqoOBHdk5-Gm23ohZKdH2YhLQ.'; // Securely using the cookie from an environment variable

app.post('/ask-bard', async (req, res) => {
    const { question } = req.body;

    try {
        const Bard = (await import('bard-ai')).default;
        console.log(Bard)
        const myBard = new Bard('dAi4mwhAFGfRhuR9vg9-wScmQ1HPUCZ7KKB76U3jhiWRCoqoOBHdk5-Gm23ohZKdH2YhLQ.');
        
        const answer = await myBard.ask(question);
        res.json({ answer });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
