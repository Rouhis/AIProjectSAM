const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Your Bard AI cookie
const bardCookie = 'cwi4myp30TVxofIsOpysv7BDuKQ-kIsorpE1FHAwrH_b16FBYURPTX2JH6lRm0Ex2KOxHQ.'; // Securely using the cookie from an environment variable

app.post('/ask-bard', async (req, res) => {
    const { question } = req.body;
    try {
        const Bard = (await import('bard-ai')).default;
        console.log(Bard)
        const myBard = new Bard(bardCookie);
        
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
