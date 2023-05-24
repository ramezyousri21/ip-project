const express = require('express')
const bp = require('body-parser')
const path = require('path');
const app = express()
const {Search , Update , AddNewData , Delete} = require('./backend')
app.use(express.json());  
app.use(bp.urlencoded({ extended: true }));




app.post('/user/:username-:password-:fullname-:nationality' , (req , res)=>{
    //console.log({"Name":req.params.username , "Password":req.params.password})
    
    AddNewData({"Name":req.params.username , "Password":req.params.password , "Nationality":req.params.nationality , "FullName":req.params.fullname})
    res.send(Search(req.params.username))
})
app.get('/user/:username-:password' , (req , res)=>{
    user = Search(req.params.username)
    pass = user[0].Password
    if(user){
        if(req.params.password==pass){
            console.log("Correct")
        }
        else{
            console.log("Wrong Password")   
        }
    }else{
        console.log("User Not Found")
    }
})
app.delete('/user/:username' , (req , res)=>{
    res.send(Delete(req.params.username))
})

app.put('/user/:username-:newdata' , (req , res)=>{
    Update(req.params.username , req.params.newdata)
    res.send(Delete(req.params.username))
})

app.listen(80 , ()=>{
    console.log("Listening....")
})
