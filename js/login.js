$(function(){

	//插入头尾部HTML
	$("header").load("../html/include/header.html");
	$("footer").load("../html/include/footer.html");

	//短信密码切换
	$("#form-horizontal").on('click', function(e) {
		if($(e.target).text()=="密码登录"){
			$(e.target).css({color:"#523669"})
			$(".textLogin").hide();
			$(".passwordLogin").show();
		}
		if($(e.target).text()=="短信登录"){
			$(e.target).css({color:"#523669"})
			$(".passwordLogin").hide();
			$(".textLogin").show();
		}
	});
	


	//获取验证码功能


	// $("#iphoneBtn").on('click', function(event) {
	// 	event.preventDefault();
	// 	let iphone = $("#iphone").val()
		
	// 	if(iphone.length == 0){
	// 		$("#iphone").next().text("请输入手机号").css({color:"red"})
	// 	}



		
	// });

	$("#form-horizontal").on('submit', function(event) {
		event.preventDefault();
		
		let iphone = $("#iphone").val(),
			password = $("#password").val()

		// let rand = {iphone:iphone};
			
		// $.cookie("users",JSON.stringify(rand))

		$.ajax({
			url: '/php/selectUsers.php',
			type: 'get',
			dataType: 'json',
			data: {"iphone": iphone,"password":password},
		})
		.done(function(data) {
			console.log(data);
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
	});

	
		

	
})