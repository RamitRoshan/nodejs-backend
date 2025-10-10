const form = document.getElementById('contactForm');
const responseMessage = document.getElementById('responseMessage');


form.addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        mobile: document.getElementById('mobile').value,
        message: document.getElementById('message').value
    };
    
    try{
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)

        });
        const data = await res.json();
        
        if (res.status === 201) {
            responseMessage.style.color = 'green';
            responseMessage.innerText = data.message;
            form.reset();
        }else{
            responseMessage.style.color = 'red';
            responseMessage.innerText = data.error || 'Something went wrong!';
        }

    }catch(error){
        responseMessage.style.color = 'red';
        responseMessage.innerText = 'Server error. Please try again later.';
    }
});


