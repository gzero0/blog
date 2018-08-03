var articleModel=require("../model/articleModel");
var categoryModel=require("../model/categoryModel");
var fs=require('fs');

function listShow(req,res){
	var cid=req.query._id?req.query._id:null;
	console.log(cid,"cid");
	articleModel.getBycid(cid,function(articles){
		categoryModel.all(function(categories){
	res.render('admin/article/list',{articles:articles,categories:categories,cid:cid});
			
		})
	})

}

/*function addShow(req,res){
	res.render('admin/article/add');
}*/
function addShow(req,res){
    categoryModel.all(function(categories){
        res.render('admin/article/add',{categories:categories});
    });
}


function add(req,res){
	var uploadpath='/uploads/'+req.file.filename;
	var article={
		title:req.body.title,
		thumb:uploadpath,
		cid:req.body.cid,
		jieshao:req.body.jieshao,
		addtime:new Date(req.body.addtime).getTime(),
		content:req.body.content,
		status:req.body.status
	}
	articleModel.model.create(article,(err,doc)=>{
		if(!err){
			res.redirect("/admin/article/list")
		}
	})
}

function del(req,res){
	var options={
		_id:req.query._id
	}
	articleModel.model.findOne(options,(err,article)=>{
		if(!err){
			var path="./public"+article.thumb;
			fs.unlinkSync(path);
			article.remove((err,dd)=>{
				if(!err){
					res.redirect("/admin/article/list")
				}
			})
		}
	})
}

/*function editShow(req,res){
	res.render('admin/article/edit');
	console.log(123);
}*/
function editShow(req,res){
	var params={
		_id:req.query._id
	}
	articleModel.model.findOne(params,(err,data)=>{
		if(!err){
			console.log(data);
	res.render('admin/article/edit',{todo:data});
			
		}
	})

}

function editSave(req,res){
	var params={
		_id:req.body._id
	}
	articleModel.model.update(params,{$set:{title:req.body.title}},(err,doc)=>{
		if(!err){
			res.redirect("/admin/article/list");
		}
	})
}


function hidden(req,res){
	var params={
		_id:req.query._id
	}
	articleModel.model.findOne(params,(err,doc)=>{
		var status=doc.status?0:1;
		articleModel.model.update(params,{$set:{status:status}},(err,doc)=>{
		if(!err){
			res.redirect("/admin/article/list");
			
		}
	})
	})
	
}
module.exports={
	listShow,
	addShow,
	add,del,editShow,editSave,
	hidden
}
