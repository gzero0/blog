var mongoose=require('mongoose');
var categorySchema=new mongoose.Schema({
	categoryName:String,
	jianjie:String,
	addtime:Number,
	status:{type:Number,default:1}
})
module.exports=categorySchema;