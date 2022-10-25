const mongoose = require("mongoose")
const bookSchema = new mongoose.Schema({
    bookName:{
        type : String,
        required : true,
        unique : true
    },

    authorName : {
        type :String,
        required : true
    
    },
    catagory : {
        type :String,
        required : true
    },
    year : {
        type : Number,
        required : true
    }
})
module.exports=mongoose.model("bookData",bookSchema);