const express = require('express')
const mongoose = require('mongoose')
const app = express()
const emailRoute = require('./routes/email.routes.js')

app.use(express.json()) //to add data through json 
app.use(express.urlencoded({extended:false}))//to add data through urlencoded

app.use("/api/emails", emailRoute);

app.get('/', (req,res) => {
    res.send('Hello World!')
})

mongoose.connect("mongodb+srv://mahekvaghera:XHe0HppvqUB3jG5m@impemails.bhcni.mongodb.net/?retryWrites=true&w=majority&appName=ImpEmails").then(() =>{
    console.log("Connected to database!");
    app.listen(3000, () => {
        console.log('Server is running on port 3000')
    });
}).catch(() => {
    console.log("connection failed!");
})