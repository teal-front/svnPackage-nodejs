/**
 ** 
 ** www.huize.com; 
 ** Version:0.1.0;
 ** Last Updated:2016-08-09; 
 **
 **/
define(["jquery","base","insure-render","insure-team","insure-validate","insure-contacts","insure-destination","insure-text","insure-id","insure-event","insure-beneficiary","insure-date","insure-restrict","insure-trial","insure-post","insure-url","message","insure-fill","insure-photo","insure-fight","insure-area","jquery-prompt"],function($,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){"use strict";function u(a){var b=a||{};for(var c in b)this[c]=b[c];this.message=new p,this.init()}return u.prototype={data:{},times:[],restricts:[],restrictIdStatus:{},inputMaxLength:50,typeOfCertificate:{},regReplaceNum:/\[[0-9]*\]+/g,messageTimeOut:2e3,getUnit:{0:"无",1:"份",2:"万元",3:"元",4:"0元",5:"00元",6:"000元",7:"岁",8:"年",9:"月",10:"天",11:"元/年"},getConditions:{0:">",1:">=",2:"<",3:"<=",4:"!==",5:"===",6:"包含",7:"不包含",8:"提示",9:"隐藏"},cardType:[],dialogBaseWidth:600,dialogBaseHeight:400,insureFormClassName:"credentials-form",formStyle:"form-item",isReady:!1,SIZE_UPLOAD_IMAGE:5,SIZE_UPLOAD_EXCEL:5,SIZE_FILE:1048576,event:function(){},ready:function(){var a=this;a.addMoreBox=$("#addMoreBox"),a.forRelationTypeSelect=$("#forrelationtype"),a.insureModules=$("#module-"+a.MODULES_ID_INSURE),a.insuredModules=$("#module-"+a.MODULES_ID_INSURED),a.beneficiaryModules=$("#module-"+a.MODULES_ID_BENEFICIARY),a.addTable(),this.event(),a.inheritInt(),a.initBeneficiary(),a.initRelationSelect(),this.eventDrowDown(),this.eventValidate(),this.eventSubmit(),this.getFirstInsureArea(),this.getAllArea(),this.getFirstJob(),a.bindContacts(a),a.initBeneficiaryType(),a.setDefaultValue(),a.defaultRestrict(),a.setGeneralRestrictsItem(),a.initTrial(),a.defaultSelectSelf(),a.defaultSelectIdCard(),a.addPhotoUpload(),a.eventInsureFight(),a.initDate(),a.initTeam(),a.fillSelfInfo(),a.fillData(),a.isReady=!0},__areaSelectIndex:0,renderSelectHmtl:function(a){var b=this,c=a||{},d=c.value||"",e=c.options||[],f=c.attr||"",g=c.listWidth,h="",i=[],j=c.styles||[],k=c.showDefaultText!==!1,l=[];return b.__areaSelectIndex++,k&&i.push('<li class="hz-select-option hz-select-option-selected" value="0" text="请选择">请选择</li>'),$.each(e,function(a,c){var e="";b.toInt(d)===b.toInt(c.code)&&(e="hz-select-option-selected",h=c.text),d||a||(h=c.text),i.push('<li class="hz-select-option '+e+'" value="'+c.code+'" text="'+c.text+'">'+c.text+"</li>")}),l.push('<div class="hz-dropdown form-item insure-form  '+j.join(" ")+'" '+f+' data-dropdown="select-area'+b.__areaSelectIndex+'">'),l.push('<div class="input-select">'),l.push('<span class="input-select-text more-tag no-select">请选择</span>'),l.push('<b class="iconfont">&#xe70b;</b>'),l.push("</div>"),l.push('<div class="hz-dropdown-content" data-dropdown-item="select-area'+b.__areaSelectIndex+'">'),l.push('<ul class="hz-dropdown-menu" style="width:'+g+';">'),l.push(i.join("")),l.push("</ul>"),l.push("</div>"),l.push(""),l.push(""),l.push("</div>"),l.join("")},init:function(){var a=this;a.getData(function(b){var c=b.result||{};return"00000"!==b.status?void a.error(b.message):(a.setValue(b.result),a.modules=c.modules,a.el.html(a.render(b)),a.renderSteps(),$(".insure-step-secondary").html(a.renderRight(b)),a.renderBeneficiarydDialog(),a.ready(),void a.success())})},setDetialValue:function(){},getData:function(a){var b=this;$.ajax({url:b.getDataUrl+"?t="+(new Date).getTime(),type:"get",success:function(b){a&&b&&a(b)},error:function(a){b.error(a.status,a)}})},setDefaultValue:function(){},jsonp:function(a,b,c,d){var e=this,f=d!==!1;$.ajax({type:"get",url:a,data:b,async:f,dataType:"jsonp",jsonp:"jsonpcallback",contentType:"application/json",success:function(a){a&&a.message&&e.info("Message",a.message),c&&a&&c(a)},error:function(a){e.error("接口调用失败",a)}})},resetSelect:function(a,b){var c=[],d=b||[];if(a)if(a.hasClass("hz-dropdown")){c.push('<li class="hz-select-option" value="0" text="请选择">请选择</li>'),c.push(d.join("")),a.find(".hz-dropdown-menu").empty().append(c.join(""));var e=a.find(".input-select-text");e.is(":text")?e.val("请选择"):e.text("请选择"),a.data("value","请选择").attr("value","请选择")}else c.push(this.defaultOption),c.push(d.join("")),a.empty().append(c.join(""))},setValue:function(a){this.data=a||{},this.product=a.product||{},this.insurance=a.insurance||{},this.baseProductId=this.product.id||0,this.baseProductPlanId=this.product.planId||0,this.productId=this.product.operationProductId||0,this.productPlanId=this.product.operationPlanId||0,this.firstDate=this.product.firstDate||0,this.latestDate=this.product.latestDate||0,this.fixedDate=this.product.fixedDate,this.maxPeople=a.product.maxPeople||0,this.minPeople=a.product.minPeople||0,this.teamTemplateType=this.product.teamTemplateType||1;var b=this.toInt(this.getQueryValue("maxPeople"));this.debug&&b&&(this.maxPeople=b),this.ruleParam=a.insurance.ruleParam||{},this.trialPrice=a.insurance.restrictRule.trialPrice||{},this.insureIncludeBirthday=1===this.product.insureIncludeBirthday?0:-1,this.insuredAgeCalculation=this.product.insuredAgeCalculation||0,this.product.insureIncludeBirthday?this.logGreen("包含生日当天"):this.logRed("不包含生日当天"),1===this.insuredAgeCalculation?this.logRed("按起保日期：1"):2===this.insuredAgeCalculation&&this.logGreen("按投保日期：2"),this.company=this.product.company||{},this.cardNumRegex=this.data.cardNumRegexJson||{},this.product.isLoginBuy&&this.logRed("此产品需要登录");try{"true"===localStorage.getItem("test")&&(this.product.insurantType="1,1,1,1")}catch(c){}this.insurantTypeArr=this.product.insurantType||"",this.insurantTypeArr=this.insurantTypeArr.split(","),this.isMoreInsurant="1"===this.insurantTypeArr[2]&&"1"!==this.insurantTypeArr[3],this.isTeamInsurant="1"===this.insurantTypeArr[3],this.hasInsured=$("#module-20").length,this.hasInsured||this.logRed("被保险人类型：没有被保险人"),this.isMoreInsurant?this.logRed("被保险人类型：多年被保险人"):this.isTeamInsurant&&this.logRed("被保险人类型：团单"),this.attrGeneKeyMap=a.attrGeneKeyMap,this.restricts=this.data.restricts||[],this.juvenilesJobFullId=this.product.juvenilesJobFullId,this.juvenilesJobFullName=this.product.juvenilesJobFullName,this.juvenilesJobFullCode=this.product.juvenilesJobFullCode,this.juvenilesJobLevel=this.product.juvenilesJobLevel,this.setDetialValue()},confirm:function(a,b){var c='<div class="pt45 pb45 tac">'+a+"</div>";layer.confirm(c,{title:!1,area:["530px"],btn:["取消","确定"]},function(a){layer.close(a)},function(){b&&b()})},$get:function(a,b,c){var d=c===!0?":visible":"";return this.el.find('[data-moduleid="'+a+'"][data-attributeid="'+b+'"]'+d)}},$.extend(u.prototype,new a),$.extend(u.prototype,new b),$.extend(u.prototype,new c),$.extend(u.prototype,new d),$.extend(u.prototype,new e),$.extend(u.prototype,new f),$.extend(u.prototype,new g),$.extend(u.prototype,new h),$.extend(u.prototype,new i),$.extend(u.prototype,new j),$.extend(u.prototype,new k),$.extend(u.prototype,new l),$.extend(u.prototype,new m),$.extend(u.prototype,new n),$.extend(u.prototype,new o),$.extend(u.prototype,new q),$.extend(u.prototype,new r),$.extend(u.prototype,new s),$.extend(u.prototype,new t),u.prototype.constructor=u,u});