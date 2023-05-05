import express from 'express'
import cors from 'cors'
import fetch from 'node-fetch'
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    res.send({ message: "app started successfully!" })
})

const API = "https://api.wazirx.com/api/v2/tickers";

app.get("/gettickers", async (req, respo) => {
    const resp = await fetch(API, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const response = await resp.json();
    let res = {};
    let keys = Object.keys(response);
    for (let key = 0; key < Math.min(10, keys.length); key++) {
        res[keys[key]] = response[keys[key]];
        // console.log(response[keys[key]]);
    }
    respo.send(res);
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
