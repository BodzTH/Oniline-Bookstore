// Define your encryption key (base64-encoded)
const encryptionKey = "gJhtVeX8Q0y1gfCM9gV1u9rycV1zgQUUOnCiNh4TXSc=";

function encryptPassword(password) {
    // Convert the base64 encoded key to WordArray
    const key = CryptoJS.enc.Base64.parse(encryptionKey);

    // Encrypt using AES in ECB mode
    const encrypted = CryptoJS.AES.encrypt(password, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });

    // Return encrypted data as Base64 string
    return encrypted.toString();
}

// Example usage
const plaintextPassword = "123456";
const encryptedPassword = encryptPassword(plaintextPassword);

console.log('Encrypted password:', encryptedPassword);