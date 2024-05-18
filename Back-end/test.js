// Load environment variables from .env file
require('dotenv').config();

// Access environment variables using process.env
const masterKey = process.env.MASTER_KEY;

if (!masterKey) {
    console.error('Master key is not set in environment variables');
    process.exit(1);
}
console.log('Master key:', masterKey);

// Now you can use `masterKey` in your application for cryptographic operations or other purposes.

// Now you can use the masterKey in your encryption/decryption functions or other sensitive operations.
