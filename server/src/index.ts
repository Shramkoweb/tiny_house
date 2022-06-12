import express from 'express';

import {listings} from './listings';

const PORT = 9000;

const app = express();

app.get('/listings', (_req, res) => res.send(listings));
app.delete('/listings/:id', ((req, res) => {
  const id: string = req.params.id;

  console.log(id);

  for (let i = 0; i < listings.length; i++) {
    if (listings[i].id === id) {
      return res.send(listings.splice(i, 1));
    }
  }

  return res.send("failed to deleted listing");
}));

app.listen(PORT, () => console.log(`[app] : http://localhost:${PORT}`));

