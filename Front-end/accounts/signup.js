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



const register_button = document.getElementById('register_button');
 register_button.addEventListener ('click',async () => {
    try {
        const password = document.getElementById('password').value;
        const confirmPassword=document.getElementById('confirm').value;
        const first_name = document.getElementById('first_name').value;
        const last_name = document.getElementById('last_name').value;
        const email = document.getElementById('email').value;
        const gender = document.getElementById('gender').value;
        const dob = document.getElementById('dob').value;
        const phone_number = document.getElementById('phoneNumber').value;
        const country = document.getElementById('country').value;
        const city = document.getElementById('city').value;
        const area = document.getElementById('area').value;
        const street = document.getElementById('street').value;
        const building_no= document.getElementById('buildingNumber').value;
        const flat_no = document.getElementById('flatNumber').value;
        const floor_no = document.getElementById('floor').value;
        const encryptedPassword = encryptPassword(password);
        if(password!=confirmPassword){
            document.getElementById('error_message').innerText = 'Passwords do not match';
            alert('Passwords do not match');
            return;
        }
        const response = await fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: first_name,
                last_name: last_name,
                email:email,
                gender: gender,
                dob: dob,
                phone_number: phone_number,
                country: country,
                city: city,
                area: area,
                street: street,
                building_no: building_no,
                flat_no: flat_no,
                floor_no: floor_no,
                encryptedPassword: encryptedPassword
            }) // Replace 'user_id_placeholder' with the actual user ID
        });
        if (response.ok) {
            window.location.href = 'http://localhost:3000/signin'; // Redirect to the sign-in page
        } else {
            document.getElementById('error_message').innerText = 'Error registering user';
            alert('Error registering user');
        }
    } 
     catch (error) {
        console.error('error signing in:', error);
        alert('Error signing in. Please try again later.');
    }
});