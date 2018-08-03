var mongoose=require("./connect.js");
var userSchema=require("./schema/userSchema.js");
var userModel=mongoose.model('user',userSchema);
module.exports=userModel;
