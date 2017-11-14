// 성공한듯

var express = require('express');
var app = express(); // express 사용에서의 약속

app.use(express.static('public')); // 정적인 파일
app.get('/', function(req, res){ // app.get의 callback 함수의 인자는 req와 res로 약속
	res.send('Hello home page');
});
app.get('/dynamic', function(req,res){
	/*var temp = `<!DOCTYPE html>
	<html>
	  <head>
	    <meta charset="utf-8">
	    <title>test_man</title>
	  </head>
	  <body>
	    Hello, Dynamic!
	  </body>
	</html>`;
	res.send(temp);*/
});
// GET 같은 것을 라우터라고 하고, 길찾는 과정을 라우팅이라고 함.
app.get('/login', function(req,res){
	res.send('please login');
});

app.listen(3000, function(){
	console.log('Connected 3000 port!');
});
