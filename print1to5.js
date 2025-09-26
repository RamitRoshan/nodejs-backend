//Q). Print number from 1 to 5 after 1 second gap (delay)


//Solve using setInterval()
// let count = 1;

// const intervalId = setInterval(() => {
//     console.log(count);
//     // count++;
//     if(count>= 5){
//         clearInterval(intervalId);
//     }
//       count++;
// }, 1000);


//solving using setTimeout()

for(let i=1; i<=5; i++){
    setTimeout(() => {
        console.log(i);
    }, i*1000);
};


//fullstack appplication with CRUD functionality for managing employee

/*

Interview Questions:
you have a model and it contains certain fields but you want to fetch data from my api and
perform operations from your app but you dont have access to my db and only the api response,
how will you use my API response and store the data in your database.
The fields of both my api response and your model arre different but the types are the same hence value will match? tell me your approach?
 */