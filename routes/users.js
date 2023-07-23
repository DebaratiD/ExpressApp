//To use this as a mini app in the main app, import express
const express = require('express')
const router = express.Router()

router.get("/new", (req,res)=>{
   // res.render("users/new",  {firstname: "Debarati"})  autofills the input with given firstname
   res.render("users/new")
})
//get for different routes:
router.get("/", (req, res)=>{
    console.log(req.query.name)
    res.send("In Users page");
})

router.post("/", (req,res)=>{
    //check if request is valid
    const isValid = false
    if(isValid){
        users.push({firstname: req.body.firstname})
        res.redirect(`/users/${users.length - 1}`)
    }
    else{
        console.log("Error")
        //res.render("users/new", {firstname: req.body.firstname})
        res.render("users/new")
    }
    console.log(req.body.firstname)
    //res.send("Create user")
})

router.route("/:id")
.get((req, res)=>{
    let val = req.params.id
    //console.log(req.user?.name)
    res.send(`Data sent was ${val}`)
})
.put((req, res)=>{
    res.send(`Update data with id: ${req.params.id}`)
})
.delete((req, res)=>{
    res.send(`Delete data with id: ${req.params.id}`)
})

const users = [{name: 'Ken'}, {name:'Barbie'}, {name:'Nikunj is a Bitch'}]
router.param("id", (req, res, next, id)=>{
   // console.log(id)
    if(id>=users.length){
        req.user = "Not found"
    }
    else{
       req.user = users[id] 
    }
    
    next()
})

module.exports = router