/**
 * Created by jiaxing on 2017/6/30.
 */
$(function () {
   function resize(){
       $("#lunbotu .carousel-inner>.item").each(function (index,ele) {
           var windowWidth = $(window).width();
           //console.log(windowWidth);
           if(windowWidth>=768){
               $(ele).empty();
               var imgUrl =($(ele).data("big_img"));
               $(ele).css("backgroundImage","url("+ imgUrl +")");
           }
           else{
               //先清空，再添加
               $(ele).empty();
               var imgUrl = $(ele).data("small_img");
               //console.log(imgUrl);
              $(ele).append("<img src="+ imgUrl +">");
               //console.log(1);
           }

       })
   }
    $(window).on("resize",resize).trigger('resize');

    //bootstrap 扩展
    $('#myTabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })

    $('[data-toggle="tooltip"]').tooltip();

    var width = 30;
    $(".nav-tabs").children().each(function (index,ele) {
        //console.log($(ele).width());
        width += $(ele).width();
    })
    //console.log(width);
   if(width>$(window).width()){
       $(".nav-tabs").css('width',width);
       $("#tzcp > .container >.ulWrapper").css("overflow-x", "scroll");
   }
    $("#news .nav-stacked a").on("click", function () {
        //console.log($(this).data('title'));
        $('#news .title').text($(this).data('title'));
    })

    //轮播图滑动

    var startX = 0;
    var endX ;
    var flag = 50;
    $(".carousel").on("touchstart", function (e) {
        console.log(e.originalEvent.touches[0].clientX);
        startX = e.originalEvent.touches[0].clientX;
    })
    $(".carousel").on("touchmove", function (e) {
        console.log(e.originalEvent.touches[0].clientX);
        endX = e.originalEvent.touches[0].clientX;

    })
    $(".carousel").on("touchend", function (e) {
        var distance = Math.abs(startX - endX);
        //判断是否为有效滑动
		console.log(distance);
        if(distance >= flag){
            startX > endX ? $(this).carousel("next") : $(this).carousel("prev");
        }
    })
})



