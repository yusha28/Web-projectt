const {
updateUser,
getUserByEmail, 
deleteUser,
addUser,getUser} = require("../queries/query");
const {connection} = require("../database/connection");

exports.deleteUser = async(req,res)=>{
    const id = parseInt(req.params.id)
    try{
        connection.query(deleteUser,[id], (err,results, fields)=>{
            return res.status(200).json({message:"data deleted sucessfully"});
        })
    }catch(err){
        return res.status(300).send(err);
    }
}
exports.updateUser = async(req,res)=>{
    const id = parseInt(req.params.id)
    const {name, featured, price, details} = req.body;
    try{
        connection.query(updateUser,[name,featured,price,details,id], (err,results, fields)=>{
            return res.status(200).json({message:"data deleted sucessfully"});
        })
    }catch(err){
        return res.status(300).send(err);
    }
}
exports.authenticateUser = async(req,res)=>{
    const{email, password} = req.body;
    try{
        connection.query(getUserByEmail,[email], (err,results, fields)=>{
            if(results.length===0){
                return res.status(300).json({message:"invalid email"})
            }
            if(results[0].password !== password){

                return res.status(300).json({message:"password not matched"})
            }
            return res.status(200).json({message:"user logged in sucessfully"})
        })
    }catch(err){
        res.status(300).send(err);
    }
}

exports.createUser = async(req,res)=>{
    const {name, email, password} = req.body;
    try{
        connection.query(getUser,(err,results, fields)=>{
            if(results){
                return res.status(300).json({message:"user with this email already exists"})
            }
        })
        connection.query(addUser,[name, email,password], (err,results, fields)=>{
            res.status(200).json({message:"user added sucessfully!"});
        })
    }catch(err){
        res.status(300).send(err);
    }
}
exports.getUser = async(req,res)=>{
    try{
        connection.query(getUser,(err,results, fields)=>{
            res.status(200).json(results);
        })
    }catch(err){
        res.status(300).send(err);
    }
}