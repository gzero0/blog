var categoryModel=require("../../model/categoryModel");
var articleModel=require("../../model/articleModel");


function index(req,res){
	var cid=req.query.cid? req.query.cid:null;
	categoryModel.all(function(categories){
		articleModel.getBycid(cid,function(articles){
			res.render("index/index",{categories:categories,articles:articles});
		})
	})
}



module.exports = {
    index
}