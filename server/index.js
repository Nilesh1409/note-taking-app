const express = require('express');
const jwt = require('jsonwebtoken');
const main = require('./database');
const user = require('./database/register');
const SECRET = require('./static');

const core = require('cors');
const { findOne } = require('./database/register');

const app = express();
app.use(express.json());
app.use(core());

function logger (req,res,next){
    console.log('Request recived');
    next()
}

app.use(logger);


async function registerUser (req,res){
   const userData = req.body;
   if(userData){
    
    const gotUser = await user.insertMany(userData);
    res.send({
        'user' : gotUser,
        'message' : 'register successfull'
    })}
    else{
        res.send('Provide user')
    }
}

async function loginUser (req,res){
    const userData = req.body;
    if(userData){
     
        const {email,password} = userData;
        const inputEmail = email;
        const userDetail = await user.findOne({email : email})
        // console.log(userDetail.password)
        if(password == userDetail.password){
            const token = jwt.sign({
                name : userDetail.name,
                email : userDetail.email,
            },SECRET);

            res.send({token : token});
        }
        
       

    } else{
         res.send('Provide user')
     }
 }


 async function registerUser (req,res){
    let {token} = res.body.context;
    const userdata = jwt.verify(token,SECRET);
    const userDetail = findOne({email : userdata.email})
    
 }

app.post('/note',takenote)
app.post('/register',registerUser);
app.post('/login',loginUser);


main().then(() => {
    app.listen(3001, () => console.log('app started listning at port 3001'))
})