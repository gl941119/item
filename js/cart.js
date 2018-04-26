
$(function(){
	
	$("footer").load("/html/include/footer.html");
	 // produceData = {
  //       "list":[
  //       {"src":"/img/glasses2.jpg","name":"钛架半框-开","subName":"选用高端航空专用钛，设计独特优雅。","price":269,"amount":1},
  //       {"src":"/img/glasses2.jpg","name":"钛架半框-开","subName":"选用高端航空专用钛，设计独特优雅。","price":279,"amount":1},
  //       {"src":"/img/glasses2.jpg","name":"钛架半框-开","subName":"选用高端航空专用钛，设计独特优雅。","price":279,"amount":1},
  //       {"src":"/img/glasses2.jpg","name":"钛架半框-开","subName":"选用高端航空专用钛，设计独特优雅。","price":279,"amount":1},
  //       {"src":"/img/glasses2.jpg","name":"钛架半框-开","subName":"选用高端航空专用钛，设计独特优雅。","price":279,"amount":1},
  //       {"src":"/img/glasses2.jpg","name":"钛架半框-开","subName":"选用高端航空专用钛，设计独特优雅。","price":279,"amount":1},
  //       {"src":"/img/glasses2.jpg","name":"钛架半框-开","subName":"选用高端航空专用钛，设计独特优雅。","price":279,"amount":1},
  //       {"src":"/img/glasses2.jpg","name":"钛架半框-开","subName":"选用高端航空专用钛，设计独特优雅。","price":279,"amount":1}
  //       ]
  //   }
  	$.cookie.json = true;
  	let product = $.cookie("products");

	let html = template("cart_tem",{list:product})
	document.getElementById('cart_list').innerHTML = html;


	// +-
	
	$("#down").on('click', function(e) {

		


	});

	console.log()
	let parent = $("#down").parent()
	parent.delegate('#down,#up', 'click', function(e) {
		
		let amount = $("#amount").text();
		if($(this).attr("id") == "down"){
			
			if(amount<=0){
				return ;
			}
			amount--;
			$("#amount").text(amount);
			$("#sub").text($("#price").text()*amount)  
		}else{

			amount++;
			$("#amount").text(amount);
			$("#sub").text($("#price").text()*amount)  


		}
	});

	


})


