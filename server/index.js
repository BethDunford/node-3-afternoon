require('dotenv').config();
const express = require("express");
const massive = require ("massive");
const PC = require ("./controllers/products_controller");
const app = express();
const { SERVER_PORT, DATABASE_STRING } = process.env;

massive(DATABASE_STRING).then(db => {
    app.set('db', db);
    console.log("Database connected");
})
.catch(err => console.log(err));

app.use(express.json());

app.get('/api/products', PC.getAll);
app.get('/api/products/:id', PC.getOne);
app.put('/api/products/:id', PC.update);
app.post('/api/products', PC.create);
app.delete('/api/products/:id', PC.delete);

app.listen(SERVER_PORT, () => {console.log(`Server listening on port ${SERVER_PORT}`);});
