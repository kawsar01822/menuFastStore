$(document).ready(function(){
    $('.menu1').click(function(){
        $(".menu1:not(this)").removeClass("contactActive").css("transition","0.3s");
        $(this).addClass("contactActive").css("transition","0.3s");
    })
})

$(document).ready(function(){
    $('.menu2').click(function(){
        $(".menu2:not(this)").removeClass("active").css("transition","1s");
        $(this).addClass("active").css("transition","1s");
    })
})