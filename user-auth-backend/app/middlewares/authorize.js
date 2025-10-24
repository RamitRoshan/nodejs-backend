const authorizeUser = (permittedRoles) => { //hof - high order function
    return(req, res, next) => { //middleware
        if(permittedRoles.includes(req.role)){
            next();
        }else{
            //403 -> forbidden
            res.status(403).json({error: 'Access Denied.'});
        }
    }
}

module.exports = authorizeUser;