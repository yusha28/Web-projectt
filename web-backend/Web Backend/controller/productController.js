const {connection} = require("../database/connection");
const {getAllProduct, 
    getAllProductByID, 
    getAllProductByFeatured,
    addProduct,
deleteProduct,
updateProduct } = require("../queries/query")

exports.getProduct = async(req,res)=>{
    try{
        connection.query(getAllProduct, (err,results, fields)=>{
            res.status(200).json(results);
        })
    }catch(err){
        res.status(300).send(err);
    }
}
exports.getProductByID = async(req,res)=>{
    const id = parseInt(req.params.id);
    try{
        connection.query(getAllProductByID,[id], (err,results, fields)=>{
            res.status(200).json(results);
        })
    }catch(err){
        res.status(300).send(err);
    }
}
exports.addProducts = async(req,res)=>{
    const {name, featured, price, details} = req.body;
    console.log(name, featured, price, details);
    try{
        if(req.files){
            var imageurl = process.env.BASE_URL + "images/" + image.filename; 
        }
        connection.query(addProduct,[name, featured, price, details], (err,results, fields)=>{
            res.status(200).json({messgae:"data added sucessfully"});
        })
    }catch(err){
        res.status(300).send(err);
    }
}

exports.getFeatured = async(req,res)=>{
    try{
        connection.query(getAllProductByFeatured,["yes"], (err,results, fields)=>{
            return res.status(200).json(results);
        })
    }catch(err){
        return res.status(300).send(err);
    }
}
exports.deleteProduct = async(req,res)=>{
    const id = parseInt(req.params.id)
    try{
        connection.query(deleteProduct,[id], (err,results, fields)=>{
            return res.status(200).json({message:"data deleted sucessfully"});
        })
    }catch(err){
        return res.status(300).send(err);
    }
}
exports.updateProduct = async(req,res)=>{
    const id = parseInt(req.params.id)
    const {name, featured, price, details} = req.body;
    try{
        connection.query(updateProduct,[name,featured,price,details,id], (err,results, fields)=>{
            return res.status(200).json({message:"data updated sucessfully"});
        })
    }catch(err){
        return res.status(300).send(err);
    }
}