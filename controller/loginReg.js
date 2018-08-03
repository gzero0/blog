var userModel=require('../model/userModel');
var utils=require('../utils/utils');
//显示首页
function index(req,res){
	res.render('admin/index/index');
}
function loginShow(req,res){
	res.render("admin/loginReg/loginShow")
}

function regShow(req,res){
	res.render("admin/loginReg/regShow")
}

function reg(req,res){
	var user={
		username:req.body.username,
		password:utils.md5(req.body.password)
	}
	userModel.create(user,(err,doc)=>{
		if(!err){
			res.redirect("/admin/login");
		}
	})
}

  function login(req,res){
  	var user={
  		username:req.body.username,
  		password:utils.md5(req.body.password)
  	}
  	userModel.findOne(user,(err,doc)=>{
  		if(!err){
  			if(doc){
  				req.session.user=doc;
  				req.flash('success',"登录成功");
  				res.redirect('/admin/index');
  			}else{
  				req.flash('error',"用户名或密码错误");
  				res.redirect("/admin/login");
  			}
  		}
  	})
  }
  
  function logout(req,res){
  	req.session.user=null;
  	res.redirect("/admin/login");
  }

module.exports={
	index,
	loginShow,
	regShow,
	reg,
	login,
	logout
}
