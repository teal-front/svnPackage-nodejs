/**
 ** 
 ** www.huize.com; 
 ** Version:0.1.0;
 ** Last Updated:2016-08-09; 
 **
 **/
define(["main","jquery","helper","underscore","message","layer"],function(a,$,b,c,d,e){var d=new Message,f=b.url.getUrlVar("insuranceNum"),g='<li class="hz-list-item"><span class="hz-list-title ell"><%=data.name%></span><p class="hz-list-content ell"><span class="pl10"><%= data.fullPremium%><%=(data.showUnit?data.showUnit:"")%></span></p></li>',h={init:function(){d.show("正在加载...","loading"),b.request.getJson({url:"/api/insurance-slips/"+f+"/health-inform"},function(a){d.hide();var h=a.result.insurance;Duck.prototype.trialGenes=function(){return JSON.parse(h.genesJson||"{}")},Duck.prototype.settingAnserJson=function(){return JSON.parse(a.result.answer||"{}")},Duck.prototype.pass=function(a){var c="//is.huize.com/product/insure",d=b.url.getUrlVar("insuranceNum"),e=(b.url.getUrlVar("productId"),b.url.getUrlVar("planId")),f=(b.url.getUrlVar("trialGenesId"),b.url.getUrlVar("preminum"),b.url.getUrlVar("orderNO")),g=b.url.getUrlVar("type"),h=b.url.getUrlVar("payUrl");if(f&&g&&h)1==g&&(h+=-1!=h.indexOf("?")?"&":"?",window.location.href=h);else{var i=c+"?insureNumber="+d+"&DProtectPlanId="+e;location.href=i}},Duck.prototype.nopass=function(a){var c=b.url.getUrlVar("planId"),d=b.url.getUrlVar("insuranceNum");e.alert("您的健康告知不符合保险公司的审核标准，无法提交保单。建议您联系我们的专业顾问协助您处理！",{btn:["预约顾问"]},function(){window.location.href="http://www.huize.com/baoxianyuyue?planid="+c+"&oppName=健康告知不通过&insureNum="+d+"&notifyAnswerId="+a}),$(".layui-layer-btn0").removeClass("layui-layer-btn0").addClass("layui-layer-btn1")},Duck.prototype.postNotifyAnswer=function(){var a=0;return b.request.postData3({url:"/api/insurance-slips/"+f+"/health-inform",data:this.getHealthOld(),async:!1},function(b){a=b.result}),a},$("#companyLogoUrl").attr("src",h.companyLogo),$("#productName").html(h.productName+" "+(h.planName||"")).attr("href","http://www.huize.com/product/detail-"+h.productId+".html?DProtectPlanId="+h.planId);var i=JSON.parse(h.genesJson),j=b.utils.marginProtectList(h.restrictRule.protectTrialItemList),k=[],l=h.restrictRule;$.each(j,function(a,b){var d=(c.find(i,function(a){return a.protectItemId==b.relateCoverageId})||{}).value||"";b.fullPremium=b.fullPremium?b.fullPremium:d,k.push(c.template(g)({data:b}))}),$("#protectList").html(k.join("")),j.length>6&&$(".protect-list-box").css({overflow:"hidden","overflow-y":"auto",height:"166px"}),$("#price").html((l.trialPrice.vipPrice/h.totalNum/100).toFixed(2)),$("#count").html(h.totalNum);var m=(c.find(i,function(a){return"paymentType"===a.key})||{}).value,n=(c.find(i,function(a){return"insureAgeLimit"===a.key})||{}).value;void 0!==m&&$("#paymentType").html(m+(void 0!==n?","+n:"")).siblings("[for='paymentType']").show(),$("#protectYear").html((c.find(i,function(a){return"insurantDateLimit"===a.key})||{}).value),$("#totalPrice").html((l.trialPrice.vipPrice/100).toFixed(2)),$(".insure-step-secondary").show(),init()})}};return h});