var categoryModel=require('../model/categoryModel');
//显示首页
function list(req,res){
	 categoryModel.all(function(categories){
        res.render('admin/category/list',{cates:categories});
    })
	/*categoryModel.find({},(err,doc)=>{
		if(!err){
			res.render('admin/category/list',{cates:doc});
		}
	})*/
}
function add(req,res){
	res.render('admin/category/add');
}





function categoryAdd(req,res){
	var params={
		categoryName:req.body.categoryName,
		jianjie:req.body.jianjie,
		addtime:new Date().getTime()
	}
	console.log(params,111)
	categoryModel.model.create(params,(err,doc)=>{
		if(err){
			console.log(err);
		}else{
			res.redirect('/admin/category/list');
		}
	})
	
}

function categoryDel(req,res){
	var prm={_id:req.query._id}
	categoryModel.model.remove(prm,(err,doc)=>{
		if(err){
			console.log(err);
		}else{
			res.redirect("/admin/category/list");
		}
	})
}


function editShow(req,res){
	var params={
		_id:req.query._id
	}
	categoryModel.model.findOne(params,(err,data)=>{
		if(!err){
			console.log(data);
	res.render('admin/category/categoryEdit',{cates:data});
			
		}
	})

}


function editSave(req,res){
	var params={
		_id:req.body._id
	}
	categoryModel.model.update(params,{$set:{categoryName:req.body.edittitle}},(err,doc)=>{
		if(!err){
			res.redirect("/admin/category/list");
		}
	})
}

module.exports={
	list,
	add,
	categoryAdd,
	categoryDel,
	editShow,
	editSave
	
}
