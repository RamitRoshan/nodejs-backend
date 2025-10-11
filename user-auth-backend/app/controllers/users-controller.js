const User = require('../models/user-model');
const {userRegisterValidationSchema}  = require('../validators/user-validator');
const bcryptjs = require('bcryptjs');

const usersCltr = {};



usersCltr.register = async(req, res) => {
    const body = req.body;

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
            await user.save();
            res.status(201).json(user);
            
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'something went wrong'});
    }
}



module.exports = usersCltr;



 
