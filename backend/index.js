const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')

const productsRouter = require("./routes/products.routes");
const connection = require("./db")
const app = express();




app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())
app.get("/", (req, res) => {
    console.log("hello world")
    res.send("hi")
})

app.use("/products",productsRouter)

app.listen(8080, async() => {
    try {
      await connection
        console.log('server is running on http://localhost:8080')
        
    } catch {
        console.log("error while connecting")
    }


}) 