window.onload = function(){

    // function handleClick(){  // eventListener / eventHandler
            

            //## Alternative ways of targetting element in web page except than .getElementById

            // const countHandle = document.getElementById('count');
            const countHandle = document.querySelector('#count');
            // const listHandle = document.getElementById('list');
            const listHandle = document.querySelector('#list');

            // //clean-up code
            // listHandle.innerHTML = "";
            
            //AJAX → new XMLHttpRequest() → open → send
            const xhr = new XMLHttpRequest();  // create new object
            xhr.open("GET", "http://localhost:4000/employees");  //configure xhr obj
            xhr.send();  //send the request to the server

            xhr.onload = function(){  //fn gets called once the response has been received from the server
                const data = JSON.parse(xhr.responseText); //parse the data
                console.log(data);
                countHandle.textContent = data.length;
                 //clean-up code
                listHandle.innerHTML = "";

                
                data.forEach(function(ele){
                   
                    const liTag = document.createElement('li');
                    liTag.textContent = ele.name;
                    listHandle.appendChild(liTag);
                })
                // console.log(typeof data, data); //object
               

                //to get all the users data using for-each
                data.forEach((ele) => {
                    console.log(ele.name);
                })
            }
        // }

}

 