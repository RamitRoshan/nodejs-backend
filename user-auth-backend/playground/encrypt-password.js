const bcryptjs = require('bcryptjs');  //npm install bcryptjs

async function register(password) {
    // 1. generate salt
    const salt = await bcryptjs.genSalt();
    console.log('salt', salt, salt.length);

    // 2. using salt generate hash password
    const encryptPassword = await bcryptjs.hash(password, salt);
    console.log('pass', encryptPassword, encryptPassword.length);
}
register('secret@123')