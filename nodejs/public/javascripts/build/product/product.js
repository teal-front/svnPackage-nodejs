/**
 ** 
 ** www.huize.com; 
 ** Version:0.1.0;
 ** Last Updated:2016-08-09; 
 **
 **/
define(["trial","jquery-tab","detail","helper","base","jquery-prompt"],function(a,b,c,d,e){"use strict";var f={init:function(){this.trial(),this.detialTab(),this.recommendTab(),this.review(),this.guide(),c.init(this.trialBox),this.event(),this.renewal()},event:function(){$("#detailTabs").on("click","li",function(){var a=0+($(".top-nav-wrap").outerHeight()||0)+($(".hz-header-wrap").outerHeight()||0)+($("#detialTab").outerHeight()||0)-($(".detail-hz-tab-box").outerHeight()||0)+($(".detail-hz-tab-boxs").outerHeight()||0);$("html,body").scrollTop(a||196),0===$(this).index()&&setTimeout(function(){$("#silderbar").addClass("fixed-sidebar")},300)})},detialTab:function(){$("#detailTabs").tab("#detialTabContent",{titleCurrent:"active",contentCurrent:"show"})},guide:function(){$("#guideTabs").on("hover","li[data-tab]",function(){$("#guideTabs li").removeClass("active"),$(this).addClass("active"),$("#guideContentTabs > div").hide(),$("#guideContentTabs > div[data-tab='"+$(this).attr("data-tab")+"']").show()})},recommendTab:function(){$("#recommendTable").tab("#recommendTableContent",{titleCurrent:"active",contentCurrent:"show",onComplete:function(a,b,c,d){}})},trialBox:{},trial:function(){var b,c,d=this,e=($("#productPlanName"),$("#productId").val()),f=$("#planId").val(),g=$("#baseProductId").val(),h=$("#basePlanId").val(),i=a.prototype.getQueryValue("DProtectPlanId"),j=function(){var b,c=a.prototype.getQueryValue("dev");try{b="true"===localStorage.getItem("dev")}catch(d){}return c&&(b="true"===c),b},k={el:$("#trialWrap"),genesArea:$(".trail-genes-list"),protectArea:$(".trial-protect-list"),productId:e,productPlanId:f,baseProductId:g,baseProductPlanId:h,change:function(){this.trialPrice&&$("[preminum]").html(this.setPrice())},getSalePromotionList:function(a){var b="";this.toInt(this.productPlanId)!==this.toInt(i)&&(b="hidden"),$("[salepromotionlist]").append('<div class="'+b+'" planid="'+this.productPlanId+'">'+a.join("")+"</div>")},getServiceTimeUrl:"/api/tools/date/now",serchJobUrl:"/search/job",debug:j()};"true"===a.prototype.getQueryValue("dev")&&(k.renderData=data.restrictRules[0],k.data=window.data||{}),c=new a(k),d.trialBox[f]=c,$(function(){$('[rel="prompt"]').prompt({position:"top"})}),b=$("#planId"),i&&b.val(i),i||($("#planIdBox").find(".filter-tag").eq(0).addClass("filter-active-tag"),$(".trail-genes-list").eq(0).show()),window.trialBox=d.trialBox,window.trial=c},review:function(){$('[id="reviewTable"]').tab("[id=reviewTableContent]",{titleCurrent:"active",contentCurrent:"show"})},renewalNum:"",isRenewal:!1,renewal:function(){var a=this,b=d.url.getUrlVar("ep");if(b){var c={};b=b.split("~"),b.forEach(function(a,b){var d=a.split("_")[0],e=a.split("_")[1];c[d]=e}),a.renewalNum=c.ins,a.isRenewal="1"===c.IsRenewal}a.renewalNum&&a.isRenewal&&$.ajax({url:"/api/insurance-slips/renewal/insured?renewalNum="+a.renewalNum+"&t="+(new Date).getTime(),type:"get",success:function(b){var c=b.result,d=$("#planId").val(),e=new Date(c.birthdate),f=$("#trialAreas .trial-item[data-key=insurantDate]");if(f.length>0&&f.hasClass("Wdate")){var g=a.getBirthdateTimePeriod(f);e<=g.maxDate&&e>=g.minDate&&(a.trialBox[d].setOldValue(f,f.val()),f.val(c.birthdate),a.trialBox[d].postChange())}f.length>1&&f.each(function(b,c){var d=a.getBirthdateTimePeriod($(this));e<=d.maxDate&&e>=d.minDate&&$(this).click()}),c.sex?$("#trialAreas  .trial-item[data-key=sex][data-default-value=男]").click():$("#trialAreas  .trial-item[data-key=sex][data-default-value=女]").click()},error:function(a){}})},getBirthdateTimePeriod:function(a){var b={},c=new e,d=a.data("list")||"[]",f=d.max||0,g=d.min||0,h=d.unit||0,i=0,j=0,k=0,l=0;if("岁"===c.getUnit(h)&&(i=g,j=f),d.subrestrict&&"天"===c.getUnit(d.subrestrict.unit)){var m=d.subrestrict.max,n=d.subrestrict.min;m&&(k=m),n&&(l=n)}var o=c.createDate({newDate:c.getCurrentTime(new Date),year:-i,date:k}),p=c.createDate({newDate:c.getCurrentTime(new Date),year:-j-1,date:l});return b.maxDate=new Date(o),b.minDate=new Date(p),b}};return f});