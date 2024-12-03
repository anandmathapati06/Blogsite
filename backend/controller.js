import mongoose from "mongoose";
import { blogModel } from "./Models.js";
import { json } from "express";
import uuid from 'react-uuid'
function open(req,res){
    
    res.send("going in");

}

async function createBlog(req,res){
    // console.log(req.params.id)
    const {name,content,title,category,img,mail} = req.body
    console.log(name);
    console.log(content);

    const search = blogModel.find({name})
    try {
     if(name !="" || content != ""){
        

        
        const  result = await blogModel.create({
            id : uuid(),
            name : name,
            title: title,
            category : category,
            content : content,
            img : img,
            mail : mail,
            createdDate : new Date()
        })

        res.status(200).json({
            msg : "Data saved sucessfully"
        })
    }else{
        res.status(404).json({

            message : "not sending",
            status : "false"
        }
        )
    }
} catch (error) {
    console.log("error",error );
    
}
}

async function fetchBlogs(req,res){
    const result = await blogModel.find()

    res.send(result)
}

async function byId(req,res){
    const id = req.params.id
    console.log(id);
    

    const result = await blogModel.find({id})

        
    console.log(result);
    
    
res.send(result)
}   
export { open  , createBlog ,fetchBlogs ,byId}