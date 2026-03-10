import express from "express";
const app=express();

import router from "./routes/index.js";
// import router2 from "./routes/tests.js";


app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}));

app.use("/",router)

// app.use("/test",router2)

app.listen(3000,()=>{
    console.log("done server is running")
})