const logger = require('morgan')
const express = require('express')
const app = express()
const port = 4000
const Products = [
    {
        category: "Sporting Goods",
        id: "1234",
        name: "Football",
        price: 49.99,
        stocked: true,
    },
    {
        category: "Sporting Goods",
        id: "3444",
        name: "Baseball",
        price: 9.99,
        stocked: true,
    },
    {
        category: "Sporting Goods",
        id: "1344",
        name: "Basketball",
        price: 29.99,
        stocked: false,
    },
    {
        category: "Electronics",
        id: "3422",
        name: "iPod Touch",
        price: 99.99,
        stocked: true,
    },
    {
        category: "Electronics",
        id: "2567",
        name: "iPhone 5",
        price: 399.99,
        stocked: false,
    },
    {
        category: "Electronics",
        id: "3214",
        name: "Nexus 7",
        price: 199.99,
        stocked: true,
    },
    {
        category: "Kitchenware",
        id: "1414",
        name: "Pot",
        price: 9.99,
        stocked: true,
    },
    {
        category: "Kitchenware",
        id: "1456",
        name: "Pan",
        price: 6.99,
        stocked: true,
    },

];
app.use(logger("short"));
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/products', (req, res) => {
    res.json(Products);
})
app.get('/products/:id', (req, res) => {
    let id = req.params.id
    let product = Products.find((product) => product.id === id)
    if (product) res.json(product);
    else
        res.status(404).json({
            error: "not found id"
        })
})
app.post("/products", (req, res) => {
    console.log(req.body);
    if (req.is("json")) {
        let product = req.body;
        console.log("Body: ", product);
        Products.push(product);
        res.json(product);
    } else {
        res.status(400).end(`Expected JSON product data!\n${req.body}`);
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})