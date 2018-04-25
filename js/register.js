

$(function(){

	$("header").load("../html/include/header.html");
	$("footer").load("../html/include/footer.html");


	let isSuccess = new Array(3);
	isSuccess.fill(false);
	
	// 验证手机号
	$("#iphone").on('blur', function(e) {
		e.preventDefault();
		let  reg = new RegExp("^1[0-9]{10}$")
		let val = $("#iphone").val()
		if(val){
			if(!reg.test(val)){
						$("#iphone").css({border:"1px solid red"}).next().text("手机号格式错误")
						
					}else{
						$("#iphone").css({border:"1px solid #799FF8"}).next().text("正确").css({color: '#799FF8'});
						isSuccess[0] = true;
					}
		}else{
			$("#iphone").css({border:"1px solid red"}).next().text("请输入手机号")
		}
	});


	// 验证密码
	$("#password").on('blur', function(e) {
		e.preventDefault();
		let  reg = new RegExp("^[a-zA-Z0-9]{6,32}$")
		let val = $("#password").val()
		if(val){
			if(!reg.test(val)){
						$("#password").css({border:"1px solid red"}).next().text("请输入6-32位字符")
					}else{
						$("#password").css({border:"1px solid #799FF8"}).next().text("正确").css({color: '#799FF8'});
						isSuccess[1] = true;
					}
		}else{
			$("#password").css({border:"1px solid red"}).next().text("请输入密码")
		}
	});

	
 
	// again验证密码
	$("#passwordAgain").on('blur', function(e) {
		e.preventDefault();
		if($("#passwordAgain").val()===$("#password").val()){
			$("#passwordAgain").css({border:"1px solid #799FF8"}).next().text("正确").css({color: '#799FF8'});
			isSuccess[2] = true;
		}else{
			$("#passwordAgain").css({border:"1px solid red"}).next().text("请再次输入登录密码")
		}
	});




	// 点击注册的一些事件
	$("#form-horizontal").submit(function(e) {

	
		// e.preventDefault();
		let	iphone =   $("#iphone").val()
		if(!iphone){
			$("#iphone").css({border:"1px solid red"}).next().text("请输入手机号")
		}
		if(!$("#password").val()){
			$("#password").css({border:"1px solid red"}).next().text("请输入密码")
		}
		let isCheckbox = $("#checkbox").prop("checked")
		let _isSuccess = isSuccess.everyx(function(a){
							return a == true;   
							})
		if(!isCheckbox || !_isSuccess){
				return false;
			}


		
	
	});




	// 阻止回车默认事件
	$("#iphone").on('keypress',function(e) {
		var a= e.which||e.keycode;
		if(a == 13){
		e.preventDefault();	
		}
	});








})