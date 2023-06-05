import express from "express"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import cookieParser from "cookie-parser"


const app = express()

app.listen(8800, ()=>{
   console.log("Connected to backend!")
})

app.use(express.json())
app.use(cookieParser())
app.use("/api/", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)

/*app.get("/sehen",(req,res)=>{
    
   const q ="SELECT * FROM sehen;" 
   db.query(q,(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
   })
})

app.get("/obl",(req,res)=>{
    
    const q ="SELECT * FROM obl;" 
    db.query(q,(err,data)=>{
     if(err) return res.json(err)
     return res.json(data)
    })
 })
 
 app.get("/sehe_obl",(req,res)=>{
    
    const q ="SELECT * FROM sehe_obl;" 
    db.query(q,(err,data)=>{
     if(err) return res.json(err)
     return res.json(data)
    })
 })
 
 app.get("/comm",(req,res)=>{
    
    const q ="SELECT * FROM comment;" 
    db.query(q,(err,data)=>{
     if(err) return res.json(err)
     return res.json(data)
    })
 })

 app.get("/log",(req,res)=>{
    
    const q ="SELECT * FROM login;" 
    db.query(q,(err,data)=>{
     if(err) return res.json(err)
     return res.json(data)
    })
 })
*/




