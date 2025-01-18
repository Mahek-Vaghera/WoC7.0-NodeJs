const express = require('express')
const mongoose = require('mongoose')
const app = express()
const productRoute = require('./routes/product.routes.js')
const Product = require('./models/product.model.js')


//middleware
app.use(express.json()) //to add data through json 
app.use(express.urlencoded({extended:false}))//to add data through urlencoded

//routes
app.use("/api/products", productRoute);

app.get('/', (req,res) => {
    res.send("Hello from Node API");
});

//to get all products


//to get a product by id

//upadate product based on id


//to delete a product


mongoose.connect("mongodb+srv://mahekvaghera:Q9H8NAGrbJG4cBSZ@cluster0.hxfin.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0") .then(() => {
    console.log("Connected to database!")
    app.listen(3000, () => {
        console.log('Server is running on 3000 port')
    });
}).catch(() => {
    console.log("Connection failed!")
})
