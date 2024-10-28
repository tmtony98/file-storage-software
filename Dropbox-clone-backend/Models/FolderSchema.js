const mongoose = require('mongoose')

const FolderSchema = new mongoose.Schema({
    name:{
        type:String,
       // required:true
    },
    createdDate:{
        type:Date
       //required:true
    },
    lastUpDated:{
        type:Date,
       // required:true
    },
    parentFoler:{
        type:String
    }
    
})

//coz already users collection created in mongodb else it will creata  a new collection
const folders = mongoose.model('folders', FolderSchema)

module.exports = folders