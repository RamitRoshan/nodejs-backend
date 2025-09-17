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

// const productDB = [];

//used  require('./data.json'); to connect json file with the server file
const productDB = require('./data.json');


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


//status of data (find in-each category how many products are there)
//{ "Electronic": 3, "Sportswear":3, "home&office":2, "Stationary": 2} => return it as a response of the frontend
app.get('/category-status', (req, res) => {
    
    const categoryCounts = productDB.reduce((acc, product) => {

        // Get the category of the current product
        const category = product.category;

        // If the product has a category
        if(category){
            acc[category] = (acc[category] || 0) +1;
        }
        return acc;
    }, {});

    res.json(categoryCounts);
});


// find minPrice, maxPrice and average
app.get('/minmax-price', (req, res) => {

    const price = productDB.map(p => p.price);
    
})



// // Route to calculate how many products are in each category
// app.get('/category-status', (req, res) => {
    
//     // Use reduce to go through every product in productDB
//     // acc (accumulator) will start as an empty object {}
//     // product is the current item in the array
//     const categoryCounts = productDB.reduce((acc, product) => {
        
//         // Get the category of the current product
//         const category = product.category;

//         // If the product has a category
//         if (category) {
//             // If acc[category] exists, add 1
//             // If it doesn’t exist yet, treat it as 0 and then add 1
//             acc[category] = (acc[category] || 0) + 1;
//         }

//         // Return the updated accumulator object to the next iteration
//         return acc;

//     }, {}); // {} is the initial value of the accumulator

//     // Send the final categoryCounts object as a JSON response
//     res.json(categoryCounts);
// });


//used to start the server


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


