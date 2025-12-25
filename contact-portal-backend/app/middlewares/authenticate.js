const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
    const token = req.headers['authorization'];

    if(!token){
        //401 unauthorized -> auth required
        return res.status(401).json({error: 'token not provided'});
    }

    try{
        const tokenData = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = tokenData.userId;
        req.role = tokenData.role;
        next();
    }catch(err){
        return res.status(401).json({error: err.message});
    }
}

module.exports = authenticateUser;


// In this Project, I am not going to use jwt authentications