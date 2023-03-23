const express = require('express')
const app = express()
const fs = require('fs');
const port = 4000
const DATA_FILE = "../productsData.json"

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/product', (req, res) => {
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send({ error: 'Unable to read data file.' });
        } else {
            res.send(JSON.parse(data));
        }
    });
})
app.get('/product/:id', (req, res) => {
    const id = req.params.id
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send({ error: 'Unable to read data file.' });
        } else {
            const products = JSON.parse(data)
            const product = products.findIndex(product => product.id === id)
            res.json(product)
        }
    });
})

app.post('/product', (req, res) => {
    const newData = req.body
    fs.readFile(DATA_FILE, (err, data) => {
        if (err) {
            console.error(err)
            res.sendStatus(500)
            return;
        }
        const parsedData = JSON.parse(data);
        parsedData.push(newData)
        fs.writeFile(DATA_FILE, JSON.stringify(parsedData), (err) => {
            if (err) {
                console.error(err)
                res.sendStatus(500)
                return;
            }
            res.json(newData);
        });
    });
})
app.put("/product/:id", (req, res) => {
    const id = req.params.id;
    const newData = req.body;

    //read file and data
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ message: 'Error reading data file!' });
            return;
        }

        //find an item by id
        const existingData = JSON.parse(data);
        const index = existingData.findIndex(product => product.id === id);
        if (index === -1) {
            res.status(404).json({ message: `Data with ID ${id} not found!` });
            return;
        }

        //insert update data into the index
        const updatedData = { ...existingData[index], ...newData };
        existingData[index] = updatedData;

        //write file
        fs.writeFile(DATA_FILE, JSON.stringify(existingData), (err) => {
            if (err) {
                res.status(500).json({ message: 'Error writing to data file!' });
                return;
            }
            res.json({ message: 'Data updated successfully!', data: updatedData });
        });
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})