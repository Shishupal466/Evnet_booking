const express = require('express')
const mongodb = require('mongodb')
const passport = require('passport');
const app = express();



const port = 5000

app.use(express.static(__dirname));

app.get("./index.html" , (req, res)=>{
    res.send("server is runnig")
    res.sendFile(path.join(__dirname +"/index.html"))
})

// app.get('/auth/google' , passport.authenticate('google',{scopr:['profile']}));

// app.get(
//     '/auth/google/callback',
//     passport.authenticate('google',{ failureRedirect:'/'}),
//     (req , res)=>{
//         res.redirect('/dashboard');
//     }
// )

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


app.listen(port,()=>{
    console.log("congratulation server running on port 5000 !!")
    console.log("hello world");
})