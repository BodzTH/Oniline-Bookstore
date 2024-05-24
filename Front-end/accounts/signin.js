// Define your encryption key (base64-encoded)
const encryptionKey = "gJhtVeX8Q0y1gfCM9gV1u9rycV1zgQUUOnCiNh4TXSc=";// Replace with your actual encryption key

function encryptPassword(password) {
    // Convert the base64 encoded key to WordArray
    const key = CryptoJS.enc.Base64.parse(encryptionKey);

    // Encrypt using AES in ECB mode
    const encrypted = CryptoJS.AES.encrypt(password, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });

    // Return encrypted data as Base64 string
    return encrypted.toString();
}



const register_button = document.getElementById('sign_in');
 register_button.addEventListener ('click',async () => {
    try {
        const password = document.getElementById('password').value;
        const email = document.getElementById('email').value;
        const encryptedPassword = encryptPassword(password);
        const response = await fetch('http://localhost:3000/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email:email,
                encryptedPassword: encryptedPassword
            }) // Replace 'user_id_placeholder' with the actual user ID
        });
        if (response.ok) {
            window.location.href = 'http://localhost:3000/home'; // Redirect to the sign-in page
        } else {
            alert('Error registering user');
        }
    } 
     catch (error) {
        console.error('Error updating the cart:', error);
        alert('Error updating the cart. Please try again later.');
    }
});