const crypto = require('crypto');
const masterKey = crypto.randomBytes(32).toString('base64');
console.log('Generated Master Key:', masterKey);