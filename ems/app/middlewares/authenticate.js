const authenticateUser = (req, res, next) => {
    //req.headers -> incoming secret key, that users is passing
    const secret = req.headers['authorization']; //sent from front-end
    if(secret === process.env.SECRET_KEY){
        next();
    }else{
        res.status(403).json({error: "Access denied. Invalid secret key."})
    }
}

module.exports = authenticateUser;