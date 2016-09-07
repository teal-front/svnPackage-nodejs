/**
 ** 
 ** www.huize.com; 
 ** Version:0.1.0;
 ** Last Updated:2016-08-09; 
 **
 **/
define(["trial","helper","base","layer","message","share-panel","my-calendar","fixed-tool-float","programs-json","jquery-plugins","jquery-prompt","animate-fly"],function(a,b,c,d,e,f,g,h,i){"use strict";function j(){this.planId=0}var k=new e,l=i;return j.prototype={constructor:j,addShopCartUrl:"/api/insurance-slips",ruleUrl:"/api/programs/restrict-rule",dateNowUrl:"/api/tools/date/now",MAX_SHOPCOUNT:20,planData:{},selPlanId:0,pageId:$(".page-id").val()||"",changeId:$(".change-id").val().split(",")||[],changeDate:$(".change-date").val().split(",")||[],dateId:$(".change-date").attr("data-id").split(",")||"",dateUnit:$(".change-date").attr("data-unit")||"",dateNow:{},isLogin:!1,init:function(){this.planData=l,this.initEvent(),this.setLogin(),this.setShare(),this.setBirthDate(),this.updateInsurantDate(),this.scrollTopFixed(),this.toolFloat=new h},initEvent:function(){var a=this;$("body").on("click",function(b){a.hideAllDropdown()}).delegate(".hz-dropdown","click",function(b){a.dropdownSelect($(this))}).delegate(".plan-radio-wrap .plan-radio","click",function(b){a.singleBox($(this))}).delegate("#favorite","click",function(b){a.sendCollect($(this))}).delegate(".add-cart-btn","click",function(b){a.addShopCart($(this))}).delegate(".plan-list-com li","click",function(b){var c=b||window.event;c.stopPropagation?c.stopPropagation():c.cancelBubble=!0,a.selectPlan($(this))})},setShare:function(){new f({items:["sina","zone"],url:location.href,pageId:this.pageId,summary:"推荐慧择定制保障方案给您，"+($("#planName").attr("data-title")||""),htmlUrl:"require-text!/html/public/grograms-share-panel.html"})},setLogin:function(){var a=this;b.state.checkLogin(function(b){a.isLogin=b.result,a.isCollect()})},sendCollect:function(a){var b=this,c=a;this.isLogin?c.hasClass("active")?d.confirm("<div class='pt45 pb45 tac'>确定取消该规划的收藏吗</div>",{btn:["取消","确定"],area:"530px",title:!1,btn1:function(a){d.close(a)},btn2:function(a){$.ajax({type:"delete",url:"/api/programs/"+b.pageId+"/collections",dataType:"json",success:function(a){"00000"===a.status&&a.result?(d.msg("取消成功"),c.removeClass("active").find(".iconfont").html("&#xe741;")):d.msg("取消失败")},error:function(a){}})}}):$.ajax({type:"post",url:"/api/programs/"+b.pageId+"/collections",dataType:"json",success:function(a){"00000"===a.status&&a.result?(d.msg("收藏成功"),c.addClass("active").find(".iconfont").html("&#xe744;")):d.msg("收藏失败")},error:function(a){}}):requirejs(["sign-float"],function(a){new a({returnUrl:location.href,showRegister:!0,callback:function(a){location.reload()}})})},isCollect:function(){var a=this;this.isLogin&&$.ajax({type:"get",url:"/api/programs/"+a.pageId+"/is-collected",dataType:"json",success:function(a){"00000"===a.status&&a.result?$("#favorite").addClass("active").find(".iconfont").html("&#xe744;"):$("#favorite").removeClass("active").find(".iconfont").html("&#xe741;")},error:function(a){}})},setBirthDate:function(){function a(a,c,d,e,f){var h=a;h.attr("data-oldval",f);new g({el:c,minDate:d,maxDate:e,defaultValue:""+f,callback:function(a,c){if("date"===c.type){var d=h.parents("li"),e=d.attr("data-planid"),f=h.attr("data-key"),g=h.attr("data-oldval");h.attr("data-oldval",a),b.setPlanParams(d,e,f,a,g)}}})}var b=this,c=$(".Wdate"),d=this.getDateNow(),e=d.substring(0,d.indexOf(" "));this.dateNow=new Date(e),c.each(function(){var c=$(this),d=c.attr("id")||"",e=c.attr("data-max")||120,f=c.attr("data-min")||0,g=c.attr("data-maxunit")||"year",h=c.attr("data-minunit")||"year",i=parseInt(c.attr("data-step")),j=parseInt(c.attr("data-min-step")),k=c.attr("data-val")||"",l=c.attr("data-valunit")||"year";isNaN(i)&&(i=1),isNaN(j)&&(j=0);var m=b.getDateRange(b.dateNow,e,g,i,-1),n=b.getDateRange(b.dateNow,f,h,j),o=""!==k?b.getDateRange(b.dateNow,k,l):"",p=""!==d?document.getElementById(d):"";""!==p&&a(c,p,m,n,o)})},getDateRange:function(a,b,c,d,e){var d=d||0,e=e||0,c=c||"year",f=a.getFullYear()+e,g=a.getMonth()+1,h=a.getDate()+d;switch(c){case"year":f-=b;break;case"month":g-=b;break;case"day":h-=b}var i=new Date(f,g,h),j=i.getMonth(),k=i.getDate();return i.getFullYear()+"-"+(j>=10?j:"0"+j)+"-"+(k>=10?k:"0"+k)},scrollTopFixed:function(){function a(a){a>g+h-155?(b.addClass("fixed-detail-tab-wrap"),c.css("margin-top",h+30)):(b.removeClass("fixed-detail-tab-wrap"),c.css("margin-top",0));for(var d=0,f=j.length;f>d;d++)a>=j[d]-1&&(e.removeClass("active"),e.eq(d).addClass("active"))}var b=$(".fixed-plan"),c=$(".programs-content"),d=$(".top-location"),e=$(".hz-tab-menu-item"),f=$("body, html"),g=b.offset().top,h=b.height(),i=f.scrollTop(),j=[];d.each(function(a,b){j.push($(this).offset().top-142)}),a(i),$(window).on("scroll",function(){i=$(this).scrollTop(),a(i)}),e.on("click",function(){var a=$(this).index(),b=$(this).attr("data-type")||"";"link"!==b&&f.animate({scrollTop:j[a]},100)})},dropdownSelect:function(a){var b=this,c=a;c.hasClass("active")?c.removeClass("active").find(".hz-dropdown-content").hide().find("li").unbind("click"):(b.hideAllDropdown(),c.addClass("active").find(".hz-dropdown-content").show().find("li").click(function(a){var d=a||window.event;if(d.stopPropagation?d.stopPropagation():d.cancelBubble=!0,!$(this).hasClass("hz-select-option-selected")){var e=$(this).attr("data-val"),f=c.attr("data-key"),g=$(this).text(),h=c.find(".input-select-text").text(),i=c.parents("li"),j=i.attr("data-planid");$(this).parent().find("li").removeClass("hz-select-option-selected"),$(this).addClass("hz-select-option-selected"),c.attr("data-val",e).removeClass("active").find(".hz-dropdown-content").hide(),c.find(".input-select-text").text(g),b.setPlanParams(i,j,f,g,h)}}))},singleBox:function(a){var b=a;if(!b.hasClass("active")){var c=b.attr("data-val")||"",d=b.parent(),e=d.parents("li"),f=e.attr("data-planid"),g=d.attr("data-key"),h="男"===c?"女":"男";d.attr("data-val",c).find(".plan-radio").removeClass("active"),b.addClass("active"),this.setPlanParams(e,f,g,c,h)}},hideAllDropdown:function(){$(".hz-dropdown").each(function(){$(this).hasClass("active")&&$(this).removeClass("active").find(".hz-dropdown-content").hide()})},animateFly:function(a,b,c){var d="//img.huizecdn.com/hz/www/page/cart-flyer.png",e=$('<img class="u-flyer" src="'+d+'">').width(40).height(40),f=document.body.scrollTop||document.documentElement.scrollTop,g=a.offset().top-a.height()/2-f,h=a.offset().left+a.width()/2,i=b.offset().top+b.height()/2-f;e.fly({start:{left:h,top:g},end:{left:b.offset().left,top:i,width:0,height:0},onEnd:function(){"function"==typeof c&&c()}})},addShopCart:function(a){if(0===this.selPlanId){var c=$(".plan-list-com").offset().top,e=$(".fixed-plan").height();return d.msg("请先选择保障计划"),a.hasClass("add-cart-top")&&$("html, body").scrollTop(c-e),!1}var f=this,g=this.planData[this.pageId],h=g[this.selPlanId],i=[];if(h.length>0){var j,k,l,m,n,o=h.length;for(j=0;o>j;j++){if(k=h[j],this.changeId.indexOf(k.productId)>-1)for(l=k.genes,m=0,n=l.length;n>m;m++){var p=l[m];if("insurantDate"===p.key){var q=$(".plan-list-com li[data-planid="+this.selPlanId+"]"),r=q.find(".Wdate").val();this.dateId.indexOf(k.productId)>-1&&this.changeDate.length>0?p.value=this.getAgeRange(r):p.value=r}}i.push({restrictRule:{platform:"1",channel:1},projectId:this.pageId,projectPlanId:this.selPlanId,productId:k.productId,planId:k.planId,genes:k.genes,totalNum:1,inShoppingCart:!0})}this.sendAddCart(i,function(c){var e=c.result;if(f.isLogin)f.animateFly(a,$("#carItemCount"),function(){location.href="https://is.huize.com/shopping-cart"});else{var g=b.cookie.getCookie("InsureNums");if(g.split(",").length===f.MAX_SHOPCOUNT)return void d.alert("购物车数量达到上限，请先结算购物车中的产品",{btn:["去购物车"]},function(a){d.close(a),location.href="https://is.huize.com/shopping-cart/"});$.each(e,function(a,c){-1===g.indexOf(c.insureNum)&&(g?g=g+","+c.insureNum:g+=c.insureNum,b.cookie.setCookie("InsureNums",g,864e5,".huize.com"))}),f.animateFly(a,$("#carItemCount"),function(){d.msg("加入购物车成功"),f.toolFloat.refreshShopCar()})}},function(a){var b="";b="10401"==a.status?"该计划中的部分产品已下架，您可购买其他计划":-2147483648==a.status?"保监会规定单笔保费不能超过20万哦~您可以分两单提交投保":a.message||"加入购物车失败，请重试",d.msg(b)})}},updateInsurantDate:function(){var a=this.planData[this.pageId]||{};for(var b in a){var c=a[b]||[];if(c.length>0){var d,e=c.length;for(d=0;e>d;d++){var f=c[d];if(this.changeId.indexOf(f.productId)>-1){var g=f.genes;if(g.length>0){var h,i=g.length;for(h=0;i>h;h++){var j=g[h];if("insurantDate"===j.key&&-1==this.dateId.indexOf(f.productId)){var k=$(".plan-list-com li[data-planid="+b+"]"),l=k.find(".Wdate").val()||"";""!==l&&(j.value=l)}}}}}}}},selectPlan:function(a){var b=a,c=b.attr("data-planid")||0;$(".plan-list-com li").removeClass("active"),b.addClass("active"),this.selPlanId=c;var d=b.find(".plan-price").text();d=d.replace("元",""),$(".plan-top-price").text(d)},setPlanParams:function(a,b,c,d,e){var f=this.planData[this.pageId]||{},g=f[b]||[];if(g.length>0){var h,i=g.length;for(h=0;i>h;h++){var j=g[h];if(this.changeId.indexOf(j.productId)>-1){var k=j.genes;if(k.length>0){var l,m=k.length;for(l=0;m>l;l++){var n=k[l];if(n.key===c){var o="";if("insurantJob"===c&&"1000043"!==j.productId)break;"insurantDate"===c&&this.dateId.indexOf(j.productId)>-1&&this.changeDate.length>0?(n.value=this.getAgeRange(d),o=this.getAgeRange(e)):n.value=d,j.optGeneOldValue={key:c,value:""!==o?o:e};break}}}}}this.getPlanPrice(a,g)}},getAge:function(a){var b=a.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);if(null==b)return!1;var c=new Date(b[1],b[3]-1,b[4]);if(c.getFullYear()==b[1]&&c.getMonth()+1==b[3]&&c.getDate()==b[4]){var d=this.dateNow,e=d.getFullYear()-b[1];if(d.getMonth()>c.getMonth())return e;if(d.getMonth()==c.getMonth())return d.getDate()>=c.getDate()?e:e-1;if(d.getMonth()<c.getMonth())return e-1}},getAgeRange:function(a){var b,c=this.changeDate.length,d=this.getAge(a),e="";for(b=0;c>b;b++){var f=this.changeDate[b],g=f.split("-"),h=g[0]||"",i=g[1]||"";if(h&&i){if(d>=h&&i>=d){e=f+this.dateUnit;break}}else if(h&&h==d){e=f+this.dateUnit;break}}return e},setPlanPrice:function(a,b){var c=b.price,d=parseFloat(.01*c).toFixed(2);isNaN(d)&&(d="--"),a.find(".plan-price").text(d+"元"),$(".plan-top-price").text(d)},sendAddCart:function(a,c,d){var e=this;k.show("正在加入购物车...","loading"),b.request.postData2({url:e.addShopCartUrl,data:a},function(a){k.hide(),c&&c(a)},function(a){k.hide(),d&&d(a)})},getDateNow:function(){var a=this,b="";return $.ajax({type:"get",url:a.dateNowUrl,async:!1,dataType:"json",success:function(a){"00000"===a.status&&a.success&&(b=a.result)}}),b},getPlanPrice:function(a,b){var c=this,e=JSON.stringify(b)||"";k.show("正在试算价格...","loading"),$.ajax({type:"post",url:c.ruleUrl,data:{data:e},dataType:"json",success:function(b){if(k.hide(),"00000"===b.status&&b.result.success!==!1)b.result.msg&&""!=b.result.msg&&d.msg("保监会规定单笔保费不能超过20万哦~您可以分两单提交投保"),c.setPlanPrice(a,b.result);else if(b.result.success===!1&&""!==b.result.msg)d.msg(b.result.msg);else{var e=b.message||"价格试算失败，请重试";d.msg(e)}}})}},c.extend(j.prototype,new c),new j});