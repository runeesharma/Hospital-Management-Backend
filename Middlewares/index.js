const {check}=require("express-validator")
const {validationResult}=require("express-validator")

exports.ValidateForm=[
    check("name").notEmpty().withMessage("Please enter name"),
    check("phoneNumber").isMobilePhone().notEmpty().withMessage("Please enter valid phone number"),
    check("email").isEmail().notEmpty().withMessage("Please enter your email"),
    check("interest").notEmpty().withMessage("Please enter your interest"),
    check("message").isLength({max:100,min:1}).notEmpty().withMessage("Please enter within 100 character")




]
exports.isValidated=(req,res,next)=>{
    const errors=validationResult(req)
        if(errors.array().length> 0){
         return   res.status(400).json({message:errors.array()[0]})

        }
        next()
}