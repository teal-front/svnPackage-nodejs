/**
 ** 
 ** www.huize.com; 
 ** Version:0.1.0;
 ** Last Updated:2016-08-09; 
 **
 **/
define(["jquery","underscore","exports","require","module"],function($,a,b,c,d){"use strict";var e=function(){e.prototype.init.apply(this,arguments)},f={sina:{text:"新浪微博",apiurl:"http://v.t.sina.com.cn/share/share.php",url:"url",title:encodeURIComponent("#精品推荐#你值得拥有"),shareIcon:"share-sina-icon",pic:"pic"},zone:{text:"QQ空间",apiurl:"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey",url:"url",title:encodeURIComponent("#精品推荐#你值得拥有"),shareIcon:"share-qz-icon",pic:"pics"}},g={url:window.location.href,title:encodeURIComponent($(".product-title").text()),site:"http://www.huize.com"};e.prototype={init:function(b){var d=$("#sharePanelBtn"),e=b.htmlUrl||"require-text!/html/public/share-panel.html",h=b.pageId||0;b.htmlUrl&&(g.title=b.summary),c([e,"jquery-prompt"],function(c,e){for(var i=b.items,j=[],k=0;k<i.length;k++){var l=f[i[k]];l.summary=encodeURIComponent(b.summary),l.picture=encodeURIComponent("//img.huizecdn.com/hz/www/page/payview/share/slogo.png"),"sina"===i[k]&&(l.title=encodeURIComponent(b.summary)),j.push(l)}d.attr("data-prompt-html",a.template(c)({datas:j,productId:b.productId,planId:b.planId,shareUrl:encodeURIComponent(b.url),qqSettings:g,pageId:h})),d.attr("data-prompt-position","bottom"),d.prompt()})},initAction:function(){$("sharePanel").delegate("a","click",function(){$(this).attr("type")})}},d.exports=e});