//cntroller of homepage for render
const renderHome = (req, res) => {
    console.log(req.session);
const {name,email} = req.session.user
    res.render("home",{name,email});
}

//cntroller of login for render
const renderlogin = (req, res) => {
    res.render("login")
}   

 
const postlogin = (req, res) => {
    const emailDB = "riyaf22@gmail.com";
    const passwordDB = "Riya@12345"
    const { email, password,name } = req.body;
console.log("jhkjh");

    if (email === emailDB && password === passwordDB) {
        req.session.user = { email,name };
        res.redirect("/");
    } else {
        res.send("login failed")
    }
}

const logoutUser=(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
          res.send("error detected")  
        }else{
            res.redirect("/login");
        }
    
    })
       
  
}




module.exports = {
     renderHome, 
     renderlogin, 
     postlogin,
     logoutUser
     
    }