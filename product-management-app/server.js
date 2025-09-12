const express = require('express');
const app = express();
const port = 3333;


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


// // DELETE product by ID
// app.delete("/products/:id", (req, res) => {
//     const id = req.params.id;

//     const index = productDB.findIndex((ele) => ele.id.toString() === id);

//     if (index === -1) {
//         return res.status(404).json({ message: "product not found" });
//     }

//     const deletedProduct = productDB.splice(index, 1); // removes the product
//     res.json({ message: "product deleted successfully", product: deletedProduct[0] });

//     console.log(index);
// });



//used to start the server


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


