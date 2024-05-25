document.addEventListener('DOMContentLoaded', async () => {
    try {
        const profile_response = await fetch('http://localhost:3000/api/profile-data');
        const profile = await profile_response.json();
        const profileHTML = `
            <h1>My Profile</h1>
            <div class="profile-info">
                <div class="profile-row">
                    <span>Email:</span>
                    <span id="email">${profile.email}</span>
                </div>
                <div class="profile-row">
                    <span>Name:</span>
                    <span id="first-name">${profile.first_name} ${profile.last_name}</span>
                </div>
                <div class="profile-row">
                    <span>Address:</span>
                    <span id="address">${profile.bulding_no}, ${profile.street}, ${profile.city}, ${profile.country}</span>
                </div>
                <div class="profile-row">
                    <span>Date of Birth:</span>
                    <span id="dob">${profile.DOB}</span>
                </div>
                <div class="profile-row">
                    <span>Gender:</span>
                    <span id="gender">${profile.Gender}</span>
                </div>
                <div class="profile-row">
                    <span>Phone Number:</span>
                    <span id="phone-number">${profile.phone_number}</span>
                </div>
                <div class="profile-row">
                    <span>Balance:</span>
                    <span id="balance">${profile.balance}</span>
                </div>
                <button id="increment-btn">+</button>
                <div id="input-container" class="hidden">
                    <input type="number" id="amount-input" placeholder="Enter amount">
                    <button id="submit-btn">Submit</button>
                </div>
            </div>`;
        document.querySelector('.profile-container').innerHTML = profileHTML;

        // Add event listeners for the increment button and submit button
        const incrementButton = document.getElementById('increment-btn');
        const inputContainer = document.getElementById('input-container');
        const amountInput = document.getElementById('amount-input');
        const submitButton = document.getElementById('submit-btn');
        const balanceElement = document.getElementById('balance');
        let balance = parseFloat(profile.balance);

        incrementButton.addEventListener('click', () => {
            inputContainer.classList.toggle('hidden');
        });

        submitButton.addEventListener('click', () => {
            const amount = parseFloat(amountInput.value);
            if (!isNaN(amount) && amount > 0) {
                balance += amount;
                balanceElement.textContent = balance.toFixed(2);
                amountInput.value = '';
                inputContainer.classList.add('hidden');
            } else {
                alert('Please enter a valid amount');
            }
        });
    } catch (error) {
        console.error('Error fetching profile data:', error);
    }
});
