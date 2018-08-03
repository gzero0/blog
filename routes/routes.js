var express = require('express');
var router = express.Router();
var utils=require('../utils/utils');

var loginRegController=require("../controller/loginReg");
var categoryController=require("../controller/category");
var articleController=require("../controller/article");

/* GET home page. */
router.get('/admin/login',loginRegController.loginShow);
router.get('/admin/reg',loginRegController.regShow);

router.post("/admin/reg",loginRegController.reg);
router.post("/admin/login",loginRegController.login);

router.get("/admin/logout",loginRegController.logout);
router.get("/",function(req,res){
	res.redirect('/admin/index');
})
//登录拦截

//router.get('/admin/*',utils.checkLogin);
router.get('/admin/index',loginRegController.index);


//栏目管理
router.get("/admin/category/list",categoryController.list);
router.get("/admin/category/add",categoryController.add);
router.post("/admin/category/add",categoryController.categoryAdd);

//删除
router.get("/admin/category/del",categoryController.categoryDel);

router.get('/admin/category/categoryEdit',categoryController.editShow);
router.post('/admin/category/categoryEdit',categoryController.editSave);

router.get('/admin/article/list',articleController.listShow);
router.get('/admin/article/add',articleController.addShow);


var multer=require('../utils/upload');
router.post('/admin/article/add',multer.single('thumb'),articleController.add);
router.get('/admin/article/del',articleController.del);
router.get('/admin/article/edit',articleController.editShow);
router.post('/admin/article/edit',articleController.editSave);
router.get('/admin/article/hidden',articleController.hidden);
module.exports = router;
