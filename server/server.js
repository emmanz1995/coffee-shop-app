const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { dbConnection } = require('./dbConnection');

const app = express();
const PORT = 5000 || process.env.PORT;

dbConnection();

app.get('/', (req, res) => {
    res.json({ message: 'Coffee shop app!' })
})

const corsOptions = {
    origin: '*'
}

app.use(cors(corsOptions));

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`Listen on PORT - ${PORT}`);
})
