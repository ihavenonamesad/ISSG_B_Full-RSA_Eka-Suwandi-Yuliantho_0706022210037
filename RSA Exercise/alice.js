const crypto = require("crypto");

const message = "I want some apples";

const keys = crypto.generateKeyPairSync("rsa", {
    modulusLength: 2048,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem'
    }
});

const alicePrivateKey = keys.privateKey;
const alicePublicKey = keys.publicKey;

const signer = crypto.createSign('SHA256');
signer.update(message);
signer.end();
const signature = signer.sign(alicePrivateKey, 'hex');

console.log("Message:", message);
console.log("Signature:", signature);
console.log("Public Key:", alicePublicKey);