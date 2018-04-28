$(function(){


	$("footer").load("../html/include/footer.html");

	// 手风琴插件
	$('#demo').zA7n(); 

	let lis =$(".banner li"),
	    ul = $(".banner ul"),
	    len = lis.length,
	    liWidth = lis[0].offsetWidth;

	// 首尾添加照片
	$(".banner li:first").clone().appendTo(ul)
	let last=lis[len-1].cloneNode(true)
	ul[0].insertBefore(last,lis[0])
	len += 2;

	let	current = 1;
	let    next = 2;
	ul.css({width:liWidth*len,left:-liWidth})

	// 添加小圆点
	let html=""
	for(let i=0;i<len-2;i++){
		html += `<i></i>`
	}

	$(".pages").append(html);

	$(".pages").delegate('i', 'mouseenter', function(e) {
		$(".pages i").removeClass()
		$(this).addClass('g_orange')

		
	});


	let timer = setInterval(move,3000)

	function move(){

		ul.animate({left:next*-liWidth}, 1000,function(){
			if (next >= len-1){
				current = 1;
				next = 2;
				ul.css({left:current * -liWidth})
				
				
			}else{
				current =next;
				next++;
			}
			if (current <= 0) {
					current = len - 2;
					next = len - 1;
					ul.css({left:(len-2)*-liWidth})
				}else{
				current =next;
				next++;
			}


		
			
		});

	}
	// 移进移出停止
	$(".banner").on('mouseenter',function(e){
		clearInterval(timer)
	})
	$(".banner").on('mouseleave',function(e){
		timer = setInterval(move,1000)
	})
	$(".pages").delegate('i', 'mouseenter', function(e) {
				let src = e.target,
				    circle = $(".pages i"),
				    a =circle.toArray();
				next=$.inArray(src,a)+1;

				move()
			})





	$.ajax({
		url: '../mock/templateData.json',
		type: 'get',
		dataType: 'json',
		
	})
	.done(function(data) {
	
		var q = template('tem_big', data);
	$(".list").html(q);
	})

	

	



	




	$.ajax({
		url: '/mock/products.json',
		type: 'get',
		dataType: 'json',
		
	})
	.done(function(data) {
		$(window).data("blah", data);  
		var w = template('tem_small',data)
		$(".tem_content").append(w);
	})
	



	



	// 保存productName数据
	$(".list").delegate('.tem_content li', 'click', function(e) {

		let productName=$(this).find("dt").text()
		console.log()
		let data = $(window).data('blah').list
		let index ;
		function exist(productName,data){
			for(let i in data){
				if(productName === data[i].name){
					console.log("success")
					return index = i;
				}
			}
		}
		index = exist(productName,data)
		let a = data[index];
		console.log(a)
		$.cookie.json=true
		$.cookie("productName",a);

		window.location = "/html/detail.html"
		
	});

	// 吸顶
	$(window).scroll(function(e) {
		let srcoll = document.documentElement.scrollTop
		if(srcoll >613){
			$(".header").removeClass('header').addClass('ceil')
		}
		if(srcoll<613){
			$(".ceil").removeClass('ceil').addClass('header')
		}
		
	});
})