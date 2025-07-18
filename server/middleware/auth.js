const jwt = require("jsonwebtoken");

//checks token  & sets req.user
exports.protect = (req, res, next) => {
    const auth = req.headers.authorization;
        if(!auth || !auth.startsWith("Bearer")) return res.status(401).json({message: "no token found}"});
        
        
        const token = auth.split(" ")[1];
        try{
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded; //{id, role}
            next();
        }
        catch(error){
            return res.status(403).json({message:"invlid token"})
        }
};

//checks role 
exports. authorize = (roles) => {
    return(req, res, next) =>
    {
        
      if(!roles.icludes(req.user.role)) return res.status(403).json({message:"foridden"})
    }
}

