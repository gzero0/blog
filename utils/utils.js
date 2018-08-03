function checkLogin(req,res,next){
	if(req.session.user){
		next();
	}else{
		res.redirect('/admin/login')
	}
}

//对密码进行加密
function md5(password){
	var crypto=require('crypto');
	var md5=crypto.createHash("md5");
	var result=md5.update(password).digest('hex');
	return result;
}


module.exports={
	checkLogin,
	md5
	

}