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
]

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/products', (req,res ) => {
    res.json(Products);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})