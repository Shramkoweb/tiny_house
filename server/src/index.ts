import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import { listings } from './listings';

const app: Express = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
    res.send('Hello World!')
});

app.get("/listings", (req: Request, res: Response) => {
    res.send(listings);
})

app.get("/delete-listing", (req: Request, res: Response) => {
    const id: string = req.body.id;

    for (let i = 0; i < listings.length; i++) {
        if (listings[i].id === id) {
            res.send(listings.splice(i, 1));
            // TS2769: No overload matches this call.
            return;
        }
    }

    res.send("Did not find listing");
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});