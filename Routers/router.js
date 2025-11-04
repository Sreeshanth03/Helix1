const express=require("express")
const {User_Validator}=require("../Validators/Validators.js")
const router=express.Router()
const {CreateUserForm,GetAll}=require("../Controllers/Controllers.js")
router.post("/createform",User_Validator,CreateUserForm)
router.get("/Getalluser",GetAll)
module.exports={router}