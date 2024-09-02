require('dotenv').config();
const jwt =require('jsonwebtoken');

const authMiddleware = (req,res,next) => {
    const authHeader=req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(403).json({
            "message":err
        });
    }
    const token = authHeader.split(' ')[1];

    try{
        const decoder = jwt.verify(token, process.env.JWT.SECRET);
        if(decoder.userId){
            req.userId = decoder.userId;
            next();
        } else{
            return res.statue(403).json({
                "message":err
            });
        }
    }
    catch(err){
        return res.statue(403).json({
            "message":err
        });
    }

}
module.exports = authMiddleware;