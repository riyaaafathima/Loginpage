const express = require("express");
const session = require("express-session");
const router= require("./router/userRouter")
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("views"));

app.use(session({
    secret: 'riya ur beautiful',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use((req, res, next) => {
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");
    next();
  });
  
app.use("/",router)

app.get("*",(req,res)=>{
    res.send("page not found");
});


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`server is runnung on port ${PORT}`);

});
