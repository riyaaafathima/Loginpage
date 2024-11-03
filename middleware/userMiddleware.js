
function checkingUser(req,res,next){
    if(!req.session?.user){
        res.redirect("/login");
        return
    }
    next();
}
function isValid(req,res,next){
    if (req.session?.user) {
        console.log(req.session.user);
        res.redirect("/");
        return
    }
    
    next();
}

module.exports={checkingUser,isValid}