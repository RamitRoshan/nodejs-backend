const User = require('../models/user-model');
const jwt = require('jsonwebtoken');
const {userRegisterValidationSchema, userLoginValidationSchema}  = require('../validators/user-validator');
const bcryptjs = require('bcryptjs');

const usersCltr = {};



usersCltr.register = async(req, res) => {
    const body = req.body;

    //we want all validation to pass, like if we don't write abort early the if one validatin fails
    //then it will stops working
    const{error, value} = userRegisterValidationSchema.validate(body, {abortEarly: false});

    if(error){
        return res.status(400).json({error:error.details.map(err => err.message)});
    }
    
    //check user objest is present
    try{
        const userPresentWithEmail = await User.findOne({email:value.email});

        if(userPresentWithEmail){
            return res.status(400).json({error: 'email already taken'});

        }else{
            const user = new User(value);
            const salt = await bcryptjs.genSalt();
            const hashPassword = await bcryptjs.hash(value.password, salt);
            user.password = hashPassword;

            //1st user role: "admin", but after that in put: all will be user
            const usersCount = await User.countDocuments();
            if(usersCount == 0){
                user.role = 'admin';
            }

            await user.save();
            res.status(201).json(user);
            
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'something went wrong'});
    }
}

//--- user login ---
usersCltr.login = async(req, res) => {
    //used to read the upcoming data
    const body = req.body;

    //validate and sanitize the input data
    const {error, value} = userLoginValidationSchema.validate(body, {abortEarly:false});

    if(error){
        return res.status(400).json({error:error.details.map(err => err.message)});
    }
    //check user/email is present
    const userPresent = await User.findOne({email: value.email});
    
    //handling error 1st(if user is not present)
    if(!userPresent){
        return res.status(400).json({error: 'invalid email'});
    }
    //in case email is present
    const isPasswordMatch = await bcryptjs.compare(value.password, userPresent.password);

    //if passwords does not match with value and userpresent
    if(!isPasswordMatch){
        return res.status(400).json({error: 'invalid password'});
    }


    //generate a jwt and send the jwt
    const tokenData = {userId: userPresent._id, role: userPresent.role};
    const token = jwt.sign(tokenData, process.env.JWT_SECRET, {expiresIn: '7d'});  //7days
    res.json({token: token});
}


usersCltr.account = async(req, res) => {
    try{
        const user = await User.findById(req.userId).select('-password'); //it will give the o/p without password (-), for security purpose
        res.json(user);
    }catch(err){
        console.log(err);
        res.status(500).json({error: "Something went wrong"});
    }
}

module.exports = usersCltr;



/*
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.  //headers
    eyJ1c2VySWQiOiI2OGVhMDNiM2Q3NWRiYzdiMjRlMzFlMmMiLCJpYXQiOjE3NjAxNjgzNTEsImV4cCI6MTc2MDc3MzE1MX0. //payload
    VDE808F8GMIDGlzjlO3URZkGRdE4vIKLM1oUbkhrq-0" //signature
}
*/



 
