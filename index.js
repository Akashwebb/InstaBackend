const express=require("express")
const app=express()
const mongoose=require("mongoose")
const path=require("path")

// cross origin resource sharing  
const cors = require('cors')
app.use(cors())


// mongoose Connection
mongoose.set('strictQuery', true);
async function connection(){
      const conn= await mongoose.connect('mongodb+srv://akash:akash@cluster0.dpwoj7s.mongodb.net/?retryWrites=true&w=majority')
}
connection()



//express-fileupload
const fileUpload=require("express-fileupload")
app.use(fileUpload())



// exporting api.js  and  using it
const api=require("./route/api")
app.use("/app/v1",api)


// app.get("app/v1/images",async(req,res)=>{
//      console.log("ok")
//      res.sendFile(path.join(__dirname,`./public/${req.params.images}`))
//  })

app.get("/images/:images" ,(req,res)=>{
     
     res.sendFile(path.join(__dirname,`./public/${req.params.images}`))
     
})
app.get("*",(req,res)=>{
     res.send("page not found")
})
app.listen(3001, ()=>{console.log("server is up")})