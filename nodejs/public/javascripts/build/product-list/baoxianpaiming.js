/**
 ** 
 ** www.huize.com; 
 ** Version:0.1.0;
 ** Last Updated:2016-08-09; 
 **
 **/
define(["helper","jquery-tab","underscore","animate-fly","require","layer"],function(a,b,c,d,e,f){var g={init:function(){this.render(),this.initEvent()},data:{},render:function(){e(["fixed-tool-float"],function(a){g.data.toolFloat=new a});var b=a.cookie.getCookie("compareProducts");$(".hz-product-item").each(function(a){b.indexOf($(this).find(".add-compare").attr("planId")||$(this).find(".add-compare").attr("productId"))>-1&&$(this).find(".add-compare").addClass("hz-check-item-checked").find(".hz-check-text").html("已加入对比"),$('<i class="decimal decimal-0'+(+a+1)+'">'+(+a+1)+"</i>").insertBefore($(this).find(".hz-product-info"))})},initEvent:function(){var a=g.data,b=g.command;$(".js-rank-list").delegate(".add-compare","click",function(){var c=$(this);if($(this).hasClass("hz-check-item-checked"))$(this).removeClass("hz-check-item-checked"),a.toolFloat.delcomparePro($(this).attr("planId")||$(this).attr("productId")),$(this).find(".hz-check-text").text("加入对比");else{if(a.toolFloat.getCompareCount()>=4)return void f.msg("对比数目最大不能超过4个");$(this).addClass("hz-check-item-checked"),$("#addToCompare .hz-check-text").html("已加入对比"),$("#fixedsidetool").css("right",0),$("#wrapToolMenu").css("left",0),b.animateFly($(this),$("#compareCount"),function(){a.toolFloat.addcomparePro(c.attr("planId")||c.attr("productId"))})}})},command:{animateFly:function(a,b,c){var d="//img.huizecdn.com/hz/www/page/cart-flyer.png",e=$('<img class="u-flyer" src="'+d+'">').width(40).height(40),f=document.body.scrollTop||document.documentElement.scrollTop,g=a.offset().top-a.height()/2-f,h=a.offset().left+a.width()/2,i=b.offset().top+b.height()/2-f;e.fly({start:{left:h,top:g},end:{left:b.offset().left,top:i,width:0,height:0},onEnd:function(){"function"==typeof c&&c()}})}}};return g});