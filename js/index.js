$(function(){


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
				ul.css({left:next*-liWidth})
				console.log(current,next,ul.css("left"),-liWidth)
			}
				if (current <= 0) {
					current = len - 2;
					next = len - 1;
					ul.css({left:(len-2)*-liWidth})
				}


			
		});
		current =next;
		next++;

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



	var templateData = {
    
    list: [
    {title:"光学眼镜",all_src:"#",src:"img/glasses1.jpg",name:"依视路集团旗下企业  制造商直供"}

    ]
	};
	var q = template('tem_big', templateData);
	$(".list").html(q);





	var produceData = {
		list:[
		{src:"img/glasses2.jpg",name:"钛架半框-开",price:279},
		{src:"img/glasses2.jpg",name:"钛架半框-开",price:279},
		{src:"img/glasses2.jpg",name:"钛架半框-开",price:279},
		{src:"img/glasses2.jpg",name:"钛架半框-开",price:279},
		{src:"img/glasses2.jpg",name:"钛架半框-开",price:279},
		{src:"img/glasses2.jpg",name:"钛架半框-开",price:279},
		{src:"img/glasses2.jpg",name:"钛架半框-开",price:279},
		{src:"img/glasses2.jpg",name:"钛架半框-开",price:279}
		]
	}



	var w = template('tem_small',produceData)
	$(".tem_content").append(w);



})