import express, { Router } from 'express';

const app = express();
const route = Router();

route.get('/', (req, res) => {
    return res.json({
        success: true,
        message: "Sucesso"
    })
})

app.use(route)

app.listen(4000, ()=> {
    console.log('HTTP server schedule-man running in ' + 4000);
});