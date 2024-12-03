import mongoose from "mongoose";


async function Dbconnection()
{
    const connection = await mongoose.connect("mongodb+srv://Anand:Anand123@anand.f2ix40i.mongodb.net/blogDB?retryWrites=true&w=majority&appName=Anand").then(()=>{
        console.log("DB connected")
        })

    
}

export default Dbconnection