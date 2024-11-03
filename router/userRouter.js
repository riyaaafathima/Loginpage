const express = require("express")
const router = express.Router();
const { renderHome, renderlogin, postlogin, logoutUser } = require("../controller/userController");
const { isValid, checkingUser } = require("../middleware/userMiddleware")

router.get("/", checkingUser, renderHome);
router.get("/login", isValid, renderlogin);
router.post("/login", isValid, postlogin);
router.get("/logout", checkingUser, logoutUser)
router.get("/sample", (req, res) => {
    let arr = [{ cardName: "card1", cardDescription: "sample product" }, { cardName: "card2", cardDescription: "sample product2" }]
    res.render("sample",{arr:arr})
})

module.exports = router