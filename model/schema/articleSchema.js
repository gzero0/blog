var mongoose=require('mongoose');
var articleSchema=new mongoose.Schema({
	title:String,
    cid:String,
    addtime:Number,
    content:String,
    jieshao:String,
    author:{type:String,default:'myself'},
    click:Number,
    thumb:String,
    status:{type:Number,default:1}
})
module.exports=articleSchema;