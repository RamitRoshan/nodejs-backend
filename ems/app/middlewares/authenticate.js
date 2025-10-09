//application level middle-ware
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

/*
HTTP status 403 means "Forbidden".
It indicates that the server understood the request (so it’s not 400), 
but the client doesn’t have permission to access the resource.
 */