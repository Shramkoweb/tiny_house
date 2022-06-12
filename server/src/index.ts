import express from 'express';

const PORT = 9000;

const app = express();

app.get('/', (req, res) => res.send('123 world'));

app.listen(PORT, () => console.log(`[app] : http://localhost:${PORT}`));

