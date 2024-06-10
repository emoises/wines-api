import express from 'express'
import { routes } from './core/routes/router';

const PORT = '3500';
const app  = express();
app.use(express.json());
app.use('/sec',routes)

app.listen(PORT, () => {
    console.log(`Wines available on port ${PORT}`)
});