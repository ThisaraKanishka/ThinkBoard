import mongoose from "mongoose";
 //1-create a schema
 //2-moedel based off of that schema

const noteSchema = new mongoose.Schema(
 {
    title: {
        type:String,
        equied:true
    },
    content: {
        type : String,
        required:true
    },
  
 }, 
 {timestamps:true} // createdAt, updatedAt
);

const Note = mongoose.model("Note", noteSchema)\
export default Note;