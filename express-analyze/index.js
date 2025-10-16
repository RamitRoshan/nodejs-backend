const express = require('express');
const app = express();
const port = 3000;



//middleware , to parse JSON data from client
app.use(express.json());


//Create a single POST route at /analyze.
app.post('/api/analyze', (req, res) => {

    //extracting data from req body and use .number because req.body gives an object
    //so to shows a number we use .numbers
    const numbers = req.body.numbers;

    //handling error 1st
    if(!numbers){
        //used return to stops the execution of the route handler.
        //it ensures that once an error response is sent, no further code runs.
        return res.status(400).json({ error: "numbers is required"});
    }

    // Check if 'numbers' is actually an array. 
   // Array.isArray() returns true only for arrays, not for objects or others.
   // If it's not an array, return an error to let the client know.
    if (!Array.isArray(numbers)) {
        return res.status(400).json({ error: "numbers must be an array" });
    }

    //edge cases
    if (numbers.length === 0) {
        return res.status(400).json({ error: "Array can't be empty"});
    }

  

    //calculate min, max, and average
    //spread operator (...) expands the array into individual elements.
    // const min = Math.min(...numbers);
    // const max = Math.max(...numbers);
    // const average = numbers.reduce(
    //     (sum, num) => sum + num, 0
    // ) / numbers.length;

    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    const average = sum / numbers.length;

    //send response
    res.json({ min, max, average })


});



//start the server
app.listen(port, () => {
    console.log(`Server is running on port number ${port}`);
});


