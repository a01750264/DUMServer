const jwt = require('jsonwebtoken');

module.exports = (req, res, next)=>{
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userData = decoded;
        next();
    } catch {
        return res.status(403).json({
            error: "You are not logged in"
        });
    };
};