const bcryptjs = require('bcryptjs');

//one-way hashing algorithm
async function loginUser(password) {
    const hashPassword = '$2b$10$3qbUZBOpVzNvwQZOVzeUm.KEX4QdoE38HVPbFV9gXCh.lFaZbJDB6';

    // ----- Inner working of the compare method -----
    const salt = hashPassword.slice(0,29); // Extract the first 29 characters (salt) from the stored hash
    console.log(salt);
    const newHashPassword = await bcryptjs.hash(password, salt); //generate a new hash from the extracted salt
    if(newHashPassword == hashPassword){ //if the newHash and the existing hash matches
        console.log('valid'); //pass is valid
    }else{
        console.log('invalid'); //invalid
    }
    
    /*(instead of writing the long manual process above,bcrypt provides a built-in compare( -> inner working of the compare method,
    which automatically handles salt extraction, hashing, and comparison. 
     we can sortly write the actual code with bcrypt compare methods) 
    */

    // ----- Actual bcrypt method which abstract -----
    // const isMatch = await bcryptjs.compare(password, hashPassword);
    // console.log(isMatch);
    //   if (isMatch) {
    //     console.log('valid');
    // } else {
    //     console.log('invalid');
    // }

}
loginUser('secret123');

/**
 * Notes
Summary for notes:

bcryptjs.hash(password, salt) → Manually hashes password using salt.

bcryptjs.compare(plainPassword, hashPassword) → Automatically extracts salt, hashes, and compares internally.

Both achieve the same goal, but .compare() is simpler and used in login systems.
 */