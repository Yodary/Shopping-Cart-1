    var products = [];
    var prices = [];
    var total = 0;
$(".newItem").click(function() {
    var product = $(".itemName").val();
    products.push(product);
$(".Total").text(" " +  + "!");
    var price = $(".itemPrice").val();
    prices.push(price);
    console.log(products);
    console.log(prices); 
    $(".item").append("<div>"+ product + " " + price+ "</div> ");   
});
$(".purchase").click(function() {
    alert("Thanks for buying "+ products[0]);
    prices.forEach(function(price) {
    $("").append();
    });
    

});









































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































