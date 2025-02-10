const loadRazorpay = async () => {
    const isLoaded = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
    if (isLoaded) {
        console.log('Razorpay script loaded successfully');
        // Initialize Razorpay or proceed with payment flow
    } else {
        console.error('Failed to load Razorpay script');
        // Handle the error, maybe retry or inform the user
    }
};

loadRazorpay();


// Function to initiate payment
const initiatePayment = async () => {
    // Step 1: Load Razorpay script
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
    if (!res) {
        alert('Razorpay SDK failed to load');
        return;
    }

    // Step 2: Call backend to create order and get order ID
    const orderResponse = await fetch('/create-order', {
        method: 'POST',
    });
    const order = await orderResponse.json();

    // Step 3: Configure Razorpay payment options
    const options = {
        key: 'YOUR_KEY_ID', // Razorpay key
        amount: order.amount, // Order amount in paise
        currency: 'INR',
        name: 'Your Website',
        description: 'Payment for your order',
        order_id: order.id, // Order ID from backend
        handler: function (response) {
            alert('Payment successful!');
            console.log(response);
        },
        prefill: {
            name: 'Shishupal',
            email: 'email@example.com',
            contact: '1234567890',
        },
        theme: {
            color: '#F37254',
        },
    };

    // Step 4: Open Razorpay payment window
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
};

// Event listener for the "Pay with UPI" button
document.getElementById('pay-button').addEventListener('click', initiatePayment);
