document.addEventListener('DOMContentLoaded', async () => {
    try{
        const profile_response = await  fetch('http://localhost:3000/api/profile-data')
        profile=await profile_response.json();
        let profileHTML= `<h1>My Profile</h1>
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
        </div>`
        document.querySelector('.profile-container').innerHTML=profileHTML;
    }
    catch(error){
        console.error('Error fetching profile data:', error);
    }
});