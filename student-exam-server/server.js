/*

1. create package.json
2. install express
3. create a server.js file
4. require('express') into the file
5. setup an express app
6. define port 3050
7. run express app on port 3050 using listen method
 */

const express = require('express');
const app = express();
const port =3050;


const students = [
  { id: 1, name: "Alice Johnson", rollNumber: "R001" },
  { id: 2, name: "Bob Smith", rollNumber: "R002" },
  { id: 3, name: "Charlie Brown", rollNumber: "R003" },
  { id: 4, name: "Diana Prince", rollNumber: "R004" }
];

const results = [
  { rollNumber: "R001", subject: "Math", marks: 85 },
  { rollNumber: "R001", subject: "Science", marks: 90 },
  { rollNumber: "R002", subject: "Math", marks: 70 },
  { rollNumber: "R002", subject: "Science", marks: 75 },
  { rollNumber: "R003", subject: "Math", marks: 60 },
  { rollNumber: "R003", subject: "Science", marks: 65 },
  { rollNumber: "R004", subject: "Math", marks: 95 },
  { rollNumber: "R004", subject: "Science", marks: 92 }
];

//Static routes
app.get("/students", (req, res) => {
    res.json(students);
})


//req.params = help to extract named parameter(anything after colon (:) ) from url [e.g: GET /students/:id]

//Dynamic routes
app.get("/students/:id", (req, res) => {
    const id = req.params.id;
    // here we used array find methods 
    const student = students.find((ele) => {
        //here === it will check datatype and values and parseInt convert string to number
        return ele.id === parseInt(id);
    });
    if(student){
        res.json(student);
    } else {
        res.status(404).json({});
    }
    
    app.get("/results", (req, res) => {
        const rollNumber = req.query.rollNumber;
        res.send(rollNumber);
    })
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})