const express = require("express")
const cors = require('cors')
const path = require('path')
const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
const {logger, logEvents} =  require('./middleware/logEvent')

app.use(logger)

const whiteList = ['http://localhost:3000', 'https://www.bing.com', 'https://www.brave.com','https://www.edge.com']
const corsOptions = {
    origin: (origin, callback)=>{
        if(whiteList.indexOf(origin)!==-1){
            callback(null, true) //first param defines the error
        }
        else{
            callback(new Error("Not allowed by cors"))
        }
    },
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))
app.set("view engine", "ejs")

 app.get("/", (req, res)=>{
//    // console.log("in get function")
        res.send("Welcome to the site!")
//     //going to render some html:
//     res.render('index', {text: "Walt Disney"})
})

const userRoutes = require("./routes/users")

app.use("/users", userRoutes)

app.listen(3000)