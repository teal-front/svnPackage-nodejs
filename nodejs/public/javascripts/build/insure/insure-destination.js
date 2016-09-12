/**
 ** 
 ** www.huize.com; 
 ** Version:0.1.0;
 ** Last Updated:2016-08-09; 
 **
 **/
define(["jquery"],function($){"use strict";var a=function(){};return a.prototype={countryObj:{},countryMax:5,countries:[],countriesObj:{},searchCountries:[],destinationEvent:function(){var a=this;$("body").delegate("#noAcceptCountry","click",function(){a.noAcceptCountry()}).delegate("#destination","click",function(){var b=$(this).data("attributeid");a.countryAttributeId=b,a.logRed(b),a.acceptCountry(b)}).delegate(".clear-country","click",function(b){a.clearCountrySelect(a.countryAttributeId)}).delegate(".country-select-box li","mouseenter",function(){$(this).addClass("mouse-enter")}).delegate(".country-select-box li","mouseleave",function(){$(this).removeClass("mouse-enter")}).delegate(".search-country-input","keyup",function(b){13===b.which&&a.destinationSearch("",a.countryAttributeId)}).delegate(".search-country-btn","click",function(){a.destinationSearch("",a.countryAttributeId)}).delegate(".alphabet-item:not(.fight)","click",function(){var b=$(this).data("content")||"",c=$(".country-content:visible").find(".country-item");a.destinationType(3),$(".alphabet-item:visible").removeClass("current"),$(this).addClass("current"),"全部"===b?c.show():(c.hide(),c.each(function(a,c){var c=$(this).data("item");-1!==b.indexOf(c)&&$(this).show()}))}).delegate(".del-country","click",function(){var b=$(this),c=(b.parent().find(".insure-country"),b.data("sort"));$(this).data("value"),$(this).data("country"),$(this).data("index");$(this).parent().remove(),delete a.countryObj[a.countryAttributeId][c],a.resetCounty(a.countryAttributeId)}).delegate(".insure-country","change",function(){var b=($(this).val(),$(this).data("sort")),c=$(this).is(":checked");$(this).is(":radio")?(a.countryObj[a.countryAttributeId]={},a.setCountry(null,a.countryAttributeId)):c?a.setCountry(!0,a.countryAttributeId):delete a.countryObj[a.countryAttributeId][b],a.resetCounty(a.countryAttributeId)}).delegate(".title-item","click",function(){var b=$(this).data("type"),c=$(this).index(),d=a.toInt($(this).data("country"));a.countryType=d,a.destinationType(1),$(".accept-country .title-item").removeClass("active"),$(this).addClass("active"),$(".accept-country .country-content").hide(),$('.accept-country .country-content[data-type="'+b+'"]').show(),$(".country-alphabet").eq(c).find(".alphabet-item").eq(0).click()})},destinationType:function(a){1===a?($(".country-box").show(),$("#searchCountryResult").hide()):2===a?($(".country-box").hide(),$("#searchCountryResult").show()):3===a&&($(".country-box").show(),$("#searchCountryResult").hide().html(""))},destinationInt:function(){var a=this;a.jsonp(a.getDestinationUrl,{time:a.getTime(),baseProductId:a.baseProductId,productId:a.productId,channel:a.channel,platform:a.platform},function(b){a.destinationData=b.result||{},a.destinationEvent(),a.destinationData.chooseOne&&(a.countryMax=1)})},destinationSearch:function(a,b){var c=this,a=a||$("#searchCountryInput").val()||"",d=[],e=0;a=$.trim(a),a&&($(".alphabet-item").removeClass("current"),c.searchCountries=[],c.countriesObj={},$.extend(c.countries,this.destinationData.acceptCountry),$.each(this.countries,function(b,d){var e=d.destinationTypeId,f=d.destinationTypeName,g=d.countrys||[];$.each(g,function(b,d){var g=d.cName||"",h=d.eName||"";a=a.toLowerCase(),g=g.toLowerCase(),h=h.toLowerCase(),-1===g.indexOf(a)&&-1===h.indexOf(a)||(c.countriesObj[d.id]={destinationTypeId:e,destinationTypeName:f,countrys:d})})}),d.push('<div class="country-box">'),d.push('<div class="search-country-content">'),d.push('<ul class="clearfix">'),$.each(c.countriesObj,function(a,b){e++;var f=b.countrys;d.push(c.reunderCountryItem(f))}),d.push("</ul>"),d.push("</div>"),d.push("</div>"),c.destinationType(2),e>0?($("#searchCountryResult .country-box").show(),$("#searchCountryResult").show().html(d.join("")),c.resetCounty(c.countryAttributeId)):(d.push('<dl class="no-country clearfix">'),d.push("<dt></dt>"),d.push("<dd>"),d.push('<p>对不起，没有找到"<i class="insure-color">'+a+'</i>"相关国家或地区</p>'),d.push("<p>可能不属于该产品承保范围。</p>"),d.push("</dd>"),d.push("</dl>"),$("#searchCountryResult").show().html(d.join("")),$("#searchCountryResult .country-box").hide()))},countryItemIndex:0,reunderCountryItem:function(a){var b=this,c=[],d=a.initial,e=a.id,f=a.cName,g=a.eName,h=f+"["+g+"]",i=h,j=a.sort,k="country"+b.countryItemIndex;return b.countryItemIndex++,c.push('<li class="country-item" data-item="'+d+'" data-country="'+e+'">'),b.destinationData.chooseOne?c.push('<input class="insure-country insure-radio" type="radio" data-index="'+b.countryItemIndex+'" data-country="'+e+'" data-cname="'+f+'" data-ename="'+g+'" name="country" data-sort="'+j+'" value="'+a.id+'" id="'+k+'" />'):c.push('<input class="insure-country insure-checkbox" type="checkbox" data-index="'+b.countryItemIndex+'" data-country="'+e+'" data-cname="'+f+'" data-ename="'+g+'" name="country" data-sort="'+j+'"  value="'+a.id+'" id="'+k+'" />'),c.push('<label for="'+k+'" class="insure-label" title="'+i+'">'+h+"</label>"),c.push("</li>"),c.join("")},clearCountrySelect:function(a){var b=this;b.countryObj[a]={},$("#countryItem").html(""),b.resetCounty(a),$(".destination-wrap").find(".insure-country").each(function(){$(this).removeAttr("checked")})},calcCountrySize:function(a){var b=0;return this.countryObj[a]&&$.each(this.countryObj[a],function(){b++}),b},setCountry:function(a,b){var c,d=this;return d.countryObj[b]||(d.countryObj[b]={}),c=d.calcCountrySize(b),5===d.countryMax&&c>=d.countryMax&&a?void d.message.show("您最多可以选择"+d.countryMax+"个国家或地区！","warning",2e3):($("#acceptCountry").find(".insure-country").each(function(){var a=$(this).val(),c=$(this).data("cname"),e=$(this).data("ename"),f=$(this).data("country"),g=$(this).data("sort"),h=$(this).data("index");$(this).is(":checked")&&d.replaceNull(g)&&(d.countryObj[b][g]={index:h,sort:g,value:a,cName:c,eName:e,country:f})}),void this.setSelectCountryStatus())},resetCounty:function(a){var b=this,c=[],d=[],e=1===b.toInt($('.insure-form[data-attributeid="'+a+'"]').data("required")),f=$('[data-attributeId="'+a+'"]').nextAll(".insure-tips").eq(0);c.push('<ul class="country-select-box">'),b.info("国家顺序",b.countryObj[a]),this.calcCountrySize(a)&&($.each(b.countryObj[a],function(a,b){c.push("<li>"+b.cName+"["+b.eName+']<span class="del-country" title="点击删除" data-country="'+b.country+'" data-value="'+b.value+'" data-index="'+b.index+'" data-sort="'+b.sort+'"></span></li>')}),c.push("</ul>"),$("#countryItem").html("").html(c.join("")),$(".destination-wrap").find(".insure-country").each(function(){$(this).attr("checked",!1)}),$.each(this.countryObj[a],function(a,b){$("#acceptCountry").find('.insure-country[value="'+b.value+'"]').attr("checked",!0),d.push(b.cName)})),e&&!this.calcCountrySize(a)?f.insertAfter("#noAcceptCountry").addClass("insure-tips-error").html(b.TEXT_TRAVEL_DESTINATION).addClass("hz-alert-error"):f.removeClass("insure-tips-error").html("").removeClass("hz-alert-error"),this.setSelectCountryStatus(),$('input[type="hidden"][data-attributeid="'+a+'"]').val(d.join("、"))},acceptCountryHtml:function(){var a=this,b=[],c="",d=["全部","ABC","DEF","GHI","JKL","MNO","PQR","STU","VWX","YZ"],e=a.destinationData.destinationType||[];return e.length?(b.push('<div class="search-country"><div><input type="text" class="search-country-input" id="searchCountryInput"/><span class="search-country-btn tac"><i class="iconfont fcw f22">&#xe700;</i></span></div></div>'),b.push('<div class="accept-country clearfix" id="acceptCountry">'),b.push('<ul class="hz-tab-menu hz-tab-style02 country-title clearfix">'),$.each(e,function(a,d){c=0===a?"active":"",b.push('<li class="hz-tab-menu-item  title-item '+c+'" data-type="country'+d.id+'" data-country="'+d.id+'"><a href="javascript:;">'+d.name+"</a></li>")}),b.push("</ul>"),$.each(e,function(c,e){b.push('<div class="country-content"  data-type="country'+e.id+'">'),b.push('<dl class="country-alphabet clearfix">'),b.push('<dt class="pr20">拼音首字母：</dt>'),b.push("<dd>"),$.each(d,function(a,c){b.push('<span class="alphabet-item '+(0===a?"current":"")+'" data-content="'+c+'">'+c+"</span>")}),b.push("</dd>"),b.push("</dl>"),b.push('<div class="max-country">温馨提示：您最多可选择'+a.countryMax+"个国家或地区！</div>"),b.push('<div class="country-box">'),b.push('<ul class="clearfix">'),$.each(a.destinationData.acceptCountry,function(c,d){e.id===d.destinationTypeId&&$.each(d.countrys,function(c,d){b.push(a.reunderCountryItem(d))})}),b.push("</ul>"),b.push("</div>"),b.push("</div>")}),b.push('<div id="searchCountryResult"></div>'),b.push('<dl class="country-select-area clearfix" id="countrySelect"><dt>我选择的是： <div class="clear-country">清空所选</div></dt><dd class="clearfix" id="countryItem"></dd></dl>'),b.push("</div>")):b.push('<div class="no-accept-country-data">暂无数据</div>'),b.join("")},setSelectCountryStatus:function(){0===$("#countryItem").find("li").length?$("#countrySelect").hide():$("#countrySelect").show()},countryTempObj:{},reunderCountry:function(a,b){var c=this,d=a||c.countryObj[b],e=[],f=$('div.select-countries[data-attributeId="'+b+'"]');f.html(""),e.push('<ul class="country-select-box">'),$.each(d,function(a,b){e.push("<li>"+b.cName+"["+b.eName+']<span class="del-country" title="点击删除" data-country="'+b.country+'" data-value="'+b.value+'" data-index="'+b.index+'" data-sort="'+b.sort+'"></span></li>')}),e.push("</ul>"),f.html(e.join(""))},acceptCountry:function(a){var b=this;b.countryTempObj[a]={},$.extend(b.countryTempObj[a],b.countryObj[a]),layer.open({skin:"huize-layer huize-countries",type:1,title:"选择目的地",shift:2,btn:["取消","确定"],area:[1.5*b.dialogBaseWidth+"px",1.2*b.dialogBaseHeight+"px"],btn2:function(c){layer.close(c),b.reunderCountry(null,a)},btn1:function(c){layer.close(c),b.countryTempObj[a]={},b.reunderCountry(b.countryTempObj[a],a),b.countryObj[a]={},b.resetCounty(a),$.extend(b.countryObj[a],b.countryTempObj[a])},shadeClose:!0,content:'<div class="destination-wrap" id="">'+b.acceptCountryHtml(a)+"</div>"}),$("#acceptCountry").find(".title-item").eq(0).click(),b.setCountry(null,a),this.resetCounty(a),$("#searchCountryInput").placeholder({blankCharacter:!1,text:"请输入关键字",left:0,top:0,wrapTagName:!1,width:200,color:"#ccc"})},noAcceptCountryHtml:function(){var a=this,b=[],c=a.destinationData.noAcceptCountry||[];return b.push('<div class="no-accept-country clearfix">'),$.each(c,function(a,c){var d=c.continentName,e=c.countrys||[];b.push("<dl>"),b.push("<dt>"+d+"</dt>"),b.push("<dd>"),b.push('<ul class="clearfix">'),$.each(e,function(a,c){var d=c.cName+"["+c.eName+"]";b.push('<li title="'+d+'">'+d+"</li>")}),b.push("</ul>"),b.push("</dd>"),b.push("</dl>")}),b.push("</div>"),c.length||(b=[],b.push('<div class="no-accept-country-data">暂无数据</div>')),b.join("")},noAcceptCountry:function(){var a=this;layer.open({skin:"huize-layer huize-countries",type:1,title:"不承保国家或地区",shift:2,btn:["我知道了"],area:[1.5*a.dialogBaseWidth+"px",1.2*a.dialogBaseHeight+"px"],yes:function(a){layer.close(a)},shadeClose:!0,content:'<div class="destination-wrap" id="">'+a.noAcceptCountryHtml()+"</div>"}),$(".destination-wrap").css({border:"none"})},validateDestination:function(){var a=this,b=a.ATTR_ID_TRIPDESTINATION.toString();return $(".insure-form[data-attributeid="+b+"][type=hidden]").val()?!0:(a.resetCounty(b),!(1===a.toInt($('.insure-form[data-attributeid="'+b+'"]').data("required"))&&!a.calcCountrySize(b)))}},a});