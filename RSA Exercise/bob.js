const crypto = require("crypto");

const message = 'I want some apples';
const signature = '73bbb2d3618fc3fe4c24429daaf2abd26b10b2e36b434c1c77b77ef2aad44fb22e45149aab3d7c0e93c57be180d3672e0eebd32d5a72a54a57f5d71284e7c55baf60c6cd3a861b72cfe6826f74ccd5b33be116254803fc9fcd0e714e31ea23e295b31337f5f1fd0d6f8b8c0edb5a1784d5fb7108dfe63464da28682316fe4927a5f0fbfe61b74ce644c51cf22b5916abff579b5939853faa8a398fa8572a52480711b741c588efa8bfd4d17863ffeb960be453799e5d31eef2af41b6aa0a141402e9642c89f5b10e27d1f8ce96977f0ccccd79e1dd74e742aaa248d374dbb579927cae4c125958e4e53b3f07709bfe0a0b533c8d63f87a21dec69b9487894062';
const publickey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA6Nw4sWJPyE/xzRH0fv9o
ZWiJPVnLwX3x7t+1yRSgNi03qne+bUkUfxfKKDBVBYYNJVqQ5hWYtOqrBou7q8l5
UZ8ZBDO8AZskCjAazVegld0o2Lqx12Sna17ML/SMI14Hcnffviq9c0O539abMQ/m
N93mjRg6R4kwE1x1Sw7Xz270LSYzUrTkANLDWmSycr2U5Tn87R/WnmxQ9tWMLFL/
ThKuS3L2cAGW170CYO82wVKEwmVx6MpTiFJjS2wXqNdHW8FGLSaxkmNJ89T0CMCB
q5R64xfKOinfzi1tkyp5zC6NY+wOGQowaTPFLvgpLszc5O+igZrNiM4rQpW4Kob9
CQIDAQAB
-----END PUBLIC KEY-----`;

const verify = crypto.createVerify('SHA256');
verify.update(message);
verify.end();
const verified = verify.verify(publickey, signature, 'hex');

console.log(`Signature Verification: ${verified}`);
console.log(`Message: ${message}`);