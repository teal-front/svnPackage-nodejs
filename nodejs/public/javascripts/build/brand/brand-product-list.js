/**
 ** 
 ** www.huize.com; 
 ** Version:0.1.0;
 ** Last Updated:2016-08-09; 
 **
 **/
define(["jquery","helper","fixed-tool-float","animate-fly","kkpager"],function($,a,b,c){"use strict";var d={toolFloat:{},init:function(){this.initEvent(),this.getHistory()},initEvent:function(){var c=this,d=$("#subCategory").val()||"0",e=$("#companyId").val()||"0",f=($("#filter").val()||"0",$("#pageIndex").val()||0),g=$("#totalCount").val()||0,h="/brand/detail/"+e+"/"+(0===~~d?"":d+"/");1!==f&&(kkpager.generPageHtml({pno:$("#pageIndex").val(),total:Math.ceil(g/10),totalRecords:g,hrefFormer:h,hrefLatter:"?page=",getLink:function(a){return 1===a?this.hrefFormer:this.hrefFormer+this.hrefLatter+a},mode:"link",isGoPage:!1,isShowTotalPage:!1,isShowCurrPage:!1,lang:{firstPageText:"首页",firstPageTipText:"首页",lastPageText:"尾页",lastPageTipText:"尾页",prePageText:"上一页",prePageTipText:"上一页",nextPageText:"下一页",nextPageTipText:"下一页"}}),kkpager.selectPage($("#pageIndex").val())),c.toolFloat=new b,$(".hz-product-list").delegate(".add-compare","click",function(){var a=$(this);if($(this).hasClass("hz-check-item-checked"))$(this).removeClass("hz-check-item-checked"),c.toolFloat.delcomparePro($(this).attr("planId")||$(this).attr("productId")),$(this).find(".hz-check-text").text("加入对比");else{if(c.toolFloat.getCompareCount()>=4)return void layer.msg("对比数目最大不能超过4个");$(this).addClass("hz-check-item-checked"),$("#fixedsidetool").css("right",0),$("#wrapToolMenu").css("left",0),c.animateFly($(this),$("#compareCount"),function(){c.toolFloat.addcomparePro(a.attr("planId")||a.attr("productId"))})}});var i=a.cookie.getCookie("compareProducts"),j=i.split(",")||[];$.each(j,function(){$(".add-compare[planid="+this+"]").addClass("hz-check-item-checked")})},initAction:function(){$("#historyData").on("click","#nextBtn",function(){if(!($("#viewWraper li").length<4)){var a=$("#viewContainer ul").width(),b=$("#viewContainer").scrollLeft(),c=1208,d=b>a?$("#viewContainer ul").eq(0):[];2*a-b===c&&($("#historyViewWrap ul").eq(0).remove(),$("#historyViewWrap").append(d),$("#viewContainer").scrollLeft(b-a)),b=$("#viewContainer").scrollLeft(),$("#viewContainer").scrollLeft(b+302)}}).on("click","#prevBtn",function(){if(!($("#viewWraper li").length<4)){var a=$("#viewContainer ul").width(),b=$("#viewContainer").scrollLeft(),c=1208,d=$("#viewContainer ul").eq(1);b===c&&($("#historyViewWrap ul").eq(1).remove(),d.insertBefore($("#historyViewWrap ul")),$("#viewContainer").scrollLeft(b+a)),b=$("#viewContainer").scrollLeft(),$("#viewContainer").scrollLeft(b-302)}})},getHistory:function(){var b=a.cookie.getCookie("Product_History"),c=b.split(","),d=[];c=$.grep(c,function(a){return""!==a}),$.each(c,function(a){this.split(":")[1]&&d.push(this.split(":")[1])}),a.request.postData2({url:"/api/products/plans/list",data:d},function(a){if(a.result.length){var b=a.result||[],c=b.filter(function(a,b){return 1===a.productStatus})||[],d=[];d.push('<ul class="view-history-list clearfix"  style="position: relative; left: 0px;margin-right:0px" id="viewWraper" index="1" >'),$.each(c,function(a,b){var c="//www.huize.com/product/detail-"+b.productId+".html?DProtectPlanId="+b.planId;d.push('<li class="view-history-item fl">'),d.push('<h4 class="view-history-item-title mt20 mb10"><a target="_blank" href="'+c+'">'+b.productName+b.planName+"</a></h4>"),d.push('<a href="'+c+'" class="product-pic" target="_blank">'),d.push('<img width="100%" src="'+b.planBigImg+'">'),d.push("</a>"),d.push("</li>")}),d.push("</ul>");var e=$(d.join("")),f=c.length,g=302*f,h=f>4?e.width(g).css("float","left").clone().attr("id","historyListClone"):"",i=$("<div id='historyViewWrap'></div>").append(e).append(h).width(g*(f>4?2:1));$("#viewContainer").html(i).scrollLeft(g),4>=f?$("#prevBtn,#nextBtn").addClass("view-history-scroll-prev-disabled"):$("#viewHistoryPage").removeClass("fn-hide")}else $("#viewContainer").hide(),$("#emptyData").show(),$("#prevBtn,#nextBtn").addClass("view-history-scroll-prev-disabled")}),this.initAction()},animateFly:function(a,b,c){var d="//img.huizecdn.com/hz/www/page/cart-flyer.png",e=$('<img class="u-flyer" src="'+d+'">').width(40).height(40),f=document.body.scrollTop||document.documentElement.scrollTop,g=a.offset().top-a.height()/2-f,h=a.offset().left+a.width()/2,i=b.offset().top+b.height()/2-f;e.fly({start:{left:h,top:g},end:{left:b.offset().left,top:i,width:0,height:0},onEnd:function(){"function"==typeof c&&c()}})}};return d});