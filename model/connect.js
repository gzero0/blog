var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/blog');
var connection=mongoose.connection;
connection.on('error',function(){
	console.error(err);
});
connection.on('open',function(){
	console.log("we are connected!");
})
module.exports=mongoose;