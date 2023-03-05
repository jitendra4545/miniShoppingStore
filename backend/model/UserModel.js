const mongoose=require('mongoose')



const userSchema=mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    mobileNo:{type:Number,required:true},
    name:{type:String,required:true},
    email:{type:String,required:true},
    is_active:{type:Boolean,required:false},
    shipping_address:Object
},{
    versionKey:false
})



const UserModel=mongoose.model("userData",userSchema)


module.exports={
    UserModel
}