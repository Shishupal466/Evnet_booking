const express = require('express');
const mongodb = require('mongodb');
const mongoose = require("mongoose");
const passport = require('passport');
const app = express();

const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/avi-project-database"



const port = 5000

app.use(express.static(__dirname));

app.get("./index.html" , (req, res)=>{
    res.send("server is runnig")
    res.sendFile(path.join(__dirname +"/index.html"))
})



app.post('/register' , (req,res)=>{
    try{
        const { name, email,ticket } = req.body;
        console.log(`Name:${name}, Email: ${email} , Ticket:${ticket}`)
        res.status(200).json({message:'Form submitted Successfully'})
    }
    catch(err){
        console.error(err);
        res.status(500).send('An error occured');
    }
})

// Connect mongodb 
mongoose.connect(MONGO_URL)
.then(()=>console.log("MongoDB connected successfully"))
.catch((err)=>console.log("mongodb connection Error : ",err));

// stored data on the mongodb compass

// async function insertuser() {
//     try{
//         const newuser = new user({
//             name: String,
//             email: String,
//             ticket: String
//         });

//         await newuser.save();
//         console.log("User added successfully!");
//     }catch (error){
//         console.error("Error adding user:", error);
//     } finally{
//         mongoose.connection.close(); // Close connection after inserting data
//     }
    
// }
// insertuser();


app.post("/add-user", async (req, res) => {
    try {
      const newUser = new User(req.body);
      await newUser.save();
      res.status(201).json({ message: "User added successfully!" });
    } catch (error) {
      res.status(500).json({ error: "Failed to add user" });
    }
  });
  
  app.listen(5000, () => console.log("Server running on port 5000"));


app.listen(port,()=>{
    console.log("congratulation server running on port 5000 !!")
    console.log("hello world");
})