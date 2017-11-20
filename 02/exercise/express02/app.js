var express = require('express');
var mysql = require('mysql');
var app = express();
app.use(express.static('public'));
// 配置swig
var swig = require('swig');
app.set('view engine','html');
app.engine('html',swig.renderFile);
// 配置路由
app.get('/',function(req,res,next){
	res.render('index',{
		title:"第一个Express的小程序"
	});
});
app.get('/receive',function(req,res,next){
	var post  = {
		username: req.query.userName
	};
	var query = connection.query('INSERT INTO userinfo SET ?', post, function (error, results, fields) {
		if (error){
			console.log(error);
			res.json({
				success:"no",
				msg:"插入失败"
			});
		}else {
			res.json({
				success:"ok",
				msg:"插入成功"
			});
		};
		
	});
});
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'test'
	});
	connection.connect();
// 容错机制
app.get("*",function(req,res,next){
	res.status(404);
	res.end('404');
});

app.use(function(err,req,res,next){
	res.status(500);
	console.log(err);
	res.end('500');
});
// 启动服务
app.listen(8081,function(){
	console.log("server is runing..");
});