

$(function(){
	
    // $.ajax({
    //     url: '/mock/products.json',
    //     type: 'get',
    //     dataType: 'json'
      
    // })
    // .done(function(data) {
    //     console.log(data);
    // })
    // .fail(function() {
    //     console.log("error");
    // })
    // .always(function() {
    //     console.log("complete");
    // });
   
    // $.get('/mock/products.json', function(data) {
    //     console.log(data)
    // });
  

    $.cookie.json =true;
    let product =$.cookie("productName")

  

    
    $(".editor-picture p").css({background:"url("+product.src+") no-repeat 70% 70%"})
    $(".panel-maney i").text(product.price)
    $(".panel-top h1").text(product.name)
    $(".panel-top p").text(product.subName)


   
    $(".bottom-matt").on('click', function(event) {
        // event.preventDefault();
     // $.cookie("products",[],{expires:7})
    $.cookie.json = true;
    let _cookie = $.cookie("products");
        
       
        
        _cookie = _cookie ||[];
       
        

    if(_cookie.length == 0 ){
        _cookie.push(product)
    }else{
        function isCookie(product,_cookie){
            for(let i in _cookie){
                if(_cookie[i].name == product.name){
                    _cookie[i].amount++;
                    return ; 
                } 
            }
            _cookie.push(product);
        }
        isCookie(product,_cookie);
    }
    console.log(_cookie)
     $.cookie("products",_cookie,{expires:7});
     });


})