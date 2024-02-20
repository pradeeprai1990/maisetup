let express=require("express")
const contactRoutes = require("./routes/web/contactRoutes")
let router=express.Router()

router.use("/contact",contactRoutes)
// router.get("/",(request,response)=>{
//     response.send("! server is working fine !")
// })

module.exports=router