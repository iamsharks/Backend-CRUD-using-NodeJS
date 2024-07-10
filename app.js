import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";

const app=express();
app.use(express.json()); //act as body parser that convert incoming info into json, it is a middleware
app.use("/api/user",router);
app.use("/api/blog",blogRouter);
//PxRpEtBsz4XN3pEz
mongoose.connect('mongodb+srv://sharksvenkat1106:PxRpEtBsz4XN3pEz@cluster0.cylif4g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>app.listen(5000))
.then(()=>
    console.log("Connected to database and listening to localhost")
)
.catch((err)=>console.log(err));

        