const data=require("../Models/Hospital")

exports.adddata=async (req,res)=>{
    try{
const _data=new data(req.body)
await _data.save()
res.status(201).json({message:"Your Form is submitted"})
    }
    catch(error){
res.status(400).json({message:"error occured`   `"})

    }
}