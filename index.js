const express=require("express")
const app=express()
const mongoose=require("mongoose")
const path=require("path")

// cross origin resource sharing  
const cors = require('cors')
app.use(cors())

//body parser
const bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// mongoose Connection
// mongoose.set('strictQuery', true);
// async function connection(){
//       const conn= await mongoose.connect('mongodb+srv://akash:akash@cluster0.dpwoj7s.mongodb.net/?retryWrites=true&w=majority')
// }
// connection()
const uri = `mongodb+srv://akash:akash@cluster0.dpwoj7s.mongodb.net/?retryWrites=true&w=majority`;
mongoose.set('strictQuery', true);
mongoose.connect(uri,(err)=>{
    if(err){
        console.log("Connected to mongodb Failed");
    }
    else{
        console.log("Successfully connected to mongodb");
    }
})



//express-fileupload
const fileUpload=require("express-fileupload")
app.use(fileUpload())


 const schma=require("./Schema/schema")
app.get("/images/:images" ,(req,res)=>{
     res.sendFile(path.join(__dirname,`./public/${req.params.images}`))
})

app.get("/api/data", async (req,res)=>{
     try{
         const data= await schma.find().sort({createdAt:-1})
          res.status(200).json({
         status:"yes",
         data
     })
     }catch(e){
         res.status(400).json({
             status:"no",
             message:e.message
         })
     }
 })


app.post("/data",async (req,res)=>{
     const {author,location,description}=req.body
     const {image_file}=req.files
     image_file.mv(`./public/${image_file.name}`,async (err)=>{
         if(err){
                  res.status(400).json({
                     status:"no",
                     message:e.message
                 })
            
         }else{
              try{
                  const value=await schma.create({
                      author:author,
                      location:location,
                      description:description,
                      likes:0,
                      image_file:image_file.name
                      
                  })
                  console.log(value)
                  res.json({
                     message:"all good",
                     value
                  })
              }
              catch(e){
                 res.status(400).json({
                     status:"no",
                     message:e.message
                 })
             }
         }
     })
    
    
 })
 
 
app.get("*",(req,res)=>{
     res.send("page not found")
})

app.listen(3001, ()=>{console.log("server is up")})