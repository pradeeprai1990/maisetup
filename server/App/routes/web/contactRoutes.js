let express=require("express");
const { saveForm } = require("../../controller/web/contactController");
let contactRoutes=express.Router()
contactRoutes.post('/contact-save',saveForm)

module.exports=contactRoutes;