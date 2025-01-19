document.addEventListener('DOMContentLoaded',()=>{
    const form = document.querySelector(".registration")
    

    // Add event listener for form submission

    form.addEventListener('submit',(event)=>{
        event.preventDefault()

        // Select all variable 
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const ticket = document.getElementById("ticket");
        
        // validation process of all variable 
        if (!name || !email){
            alert("please fill out properly.")
            return ;
        }

        // print all varibale data in the console 

        console.log("From submitted : " , {name , email, ticket});

        // Display the confirmation message
        alert(`Thank you , ${name}! you have successfully registered for the events with a ${ticket} ticket`);

        // Clear from after submit
        form.reset();
       
    })
    // Email validation

    function validateEmail(email){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});


