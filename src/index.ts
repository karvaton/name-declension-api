import express, {Request, Response} from 'express';
import declention from './declention';

const app = express();

app.use(express.json());

app.get('/ingenitive', async (req: Request, res: Response) => {
    const givenName = req.query.givenName as string;
    const patronymicName = req.query.patronymicName as string;
    const familyName = req.query.familyName as string;
    // console.log(name);
    const nameInVocative = await declention.inGenitive(givenName, patronymicName, familyName);
    res.send(nameInVocative);
});

app.get('/indative', async (req: Request, res: Response) => {
    const givenName = req.query.givenName as string;
    const patronymicName = req.query.patronymicName as string;
    const familyName = req.query.familyName as string;
    // console.log(name);
    const nameInVocative = await declention.inDative(givenName, patronymicName, familyName);
    res.send(nameInVocative);
});

app.get('/inaccusative', async (req: Request, res: Response) => {
    const givenName = req.query.givenName as string;
    const patronymicName = req.query.patronymicName as string;
    const familyName = req.query.familyName as string;
    // console.log(name);
    const nameInVocative = await declention.inAccusative(givenName, patronymicName, familyName);
    res.send(nameInVocative);
});

const start = async () => {
    app.listen(7000, () => console.log(`App started on http://localhost:${7000}`));
}

start();