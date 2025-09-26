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