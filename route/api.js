// const express=require("express")
// // const  route=express.Router()
// const path = require("path")
// // import and use of   body-parse 
// const bodyParser=require("body-parser")
// route.use(bodyParser.urlencoded({extended:false}))
// route.use(bodyParser.json())

// const schma=require("../Schema/schema")

// route.get("/data", async (req,res)=>{
//     try{
//         const data= await schma.find().sort({createdAt:-1})
//     res.status(200).json({
//         status:"yes",
//         data
//     })
//     }catch(e){
//         res.status(400).json({
//             status:"no",
//             message:e.message
//         })
//     }
// })
// route.get("/test",async(req,res)=>{
//     res.send("hello")
// })
// route.post("/data",async (req,res)=>{
//     const {author,location,description}=req.body
//     const {image_file}=req.files
//     image_file.mv(`./public/${image_file.name}`,async (err)=>{
//         if(err){
//                  res.status(400).json({
//                     status:"no",
//                     message:e.message
//                 })
           
//         }else{
//              try{
//                  const value=await schma.create({
//                      author:author,
//                      location:location,
//                      description:description,
//                      likes:0,
//                      image_file:image_file.name
                     
//                  })
//                  console.log(value)
//                  res.json({
//                     message:"all good",
//                     value
//                  })
//              }
//              catch(e){
//                 res.status(400).json({
//                     status:"no",
//                     message:e.message
//                 })
//             }
//         }
//     })
   
   
// })














// route.delete("/data/:author",async (req,res)=>{
//    try{
//     const data=await schma.deleteOne({_id:req.params.author})
//     res.status(200).json({
//         status:"yes",
//         data
//     })
//    }catch(e){
//     res.status(400).json({
//         status:"no",
//         message:e.message
//     })
//    }
// })

module.exports=route