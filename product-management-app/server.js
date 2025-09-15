const express = require('express');
const app = express();
const port = 3333;


/**
 * common req (request) properties, in Express.js
 * req.body, req.query, req.params, req.methods, req.url
*/


// enable configuration to parse incoming json
// application level middleware + in built middleware
app.use(express.json());

const productDB = [];

app.get('/products', (req, res) => {
    res.json(productDB);
});

app.post('/products', (req, res) => {
    const product = req.body;
    product.id = Date.now();
    productDB.push(product);
    res.status(201).json(product);
});



// here we have to print single product or {} 404
//Dynamic routes
app.get("/products/:id", (req, res) => {
    const id = req.params.id;   

    // use productDB instead of products
    const product = productDB.find((ele) => {
        return ele.id === parseInt(id);  // convert string to number
    });

    // handling error first
    if (!product) {
        return res.status(404).json({ message: "product not found" });
    }

    res.json(product);
});


// DELETE product by ID
app.delete('/products/:id', (req, res) => {
    const id = req.params.id;
    const index = productDB.findIndex(ele => ele.id == parseInt(id));
    if(index == -1){
        return res.status(404).json({});
    }
    const removeItem = productDB.splice(index, 1);
    res.json(removeItem[0]);
});


//Updates a product’s details based on its ID.(PUT /products/:id)
app.put('/products/:id', (req, res) => {
    const id =  req.params.id;
    const body = req.body;

    const product = productDB.find(ele => ele.id === parseInt(id));
    //if product is not present(handling error first)
    if(!product){
        return res.status(404).json({message: "product not found"});
    }
    //if product is present
    Object.assign(product, body);
    res.json(product);
});


//used to start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


