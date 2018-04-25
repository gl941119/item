

$(function(){
	$.cookie("productId","35")
		$.cookie.json = true;
    let productId =  $.cookie("productId")


    $.ajax({
    	url: '/path/to/file',
    	type: 'default GET (Other values: POST)',
    	dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
    	data: {param1: 'value1'},
    })
    .done(function(data) {
    	console.log(data);
    	
    	$(".panel-maney i").text(data.price)
    	$(".editor-picture").css({background:data.src})
    	
    })
    
    





})