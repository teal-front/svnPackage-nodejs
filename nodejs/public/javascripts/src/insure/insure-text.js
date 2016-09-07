define(function() {
	'use strict';
	/*
	 * @constructor InsureText
	 * @author 
	 * @version 0.0.1
	 * @description 提示文本
	 */
	var InsureText = function() {

	};
	var API_DOMAIN = '//is.huize.com';
	InsureText.prototype = {
		TEXT_INSURED_DATA_ERROR: '出生日期不在承保范围之内',
		TEXT_INSURE_DATA_ERROR: '不在承保范围之内',
		TEXT_SYMBOL_ARR: {},
		TEXT_DIALOG_TITLE_DEFAULT: '提示信息',
		TEXT_LOADDING: '正在加载数据，请稍后...',
		TEXT_UPLOADING: '正在上传数据，请稍等...',
		TEXT_SUBMIT: '正在提交数据...',
		TEXT_PARSE_EXCEL: '正在解析文件...',
		TEXT_INSURESTATEMENT: '本人同意以上授权内容',
		TEXT_IMPORT_ERROR: '导入失败',
		TEXT_TEMPLATE_ERROR: '模板类型错误，请选择正确的模板',
		TEXT_FORCEPAY: function(comName) {
			var com = this.replaceNull(comName);
			return '投保人（本人）同意按约定的日期向' + com + '支付本保险合同续保应缴保险费。投保人（本人）授权' + com + '在本保单到期前1个月内从投保人（本人）授权的银行指定账户内扣缴保险合同续保保费。';
		},
		TEXT_BENEFICIARY: '《继承法》规定的法定继承人范围是：第一顺序继承人为配偶、子女、父母；第二顺序继承人为兄弟姐妹、祖父母、外祖父母。',
		TEXT_JOBTIPS: '您选择的职业不在承保范围内，请重新选择！',
		TEXT_DEL: '您确定要删除吗？',
		TEXT_DEL_HTML: '<div style="text-align: center;padding-top: 30px;font-size: 20px;"> 您确定要删除吗？</div>',
		TEXT_PASSWORDERROR: '您输入的密码不一致',
		TEXT_UPLOADMAXIMAGE: '只能上传两张图片',
		TEXT_PARAMETERERROR: '获取详情页面参数错误，请重试！',
		TEXT_INSURE_MAX: '本单最多被保人人数为：',
		TEXT_INSURE_MIN: '本单最少被保人人数为：',
		TEXT_INSURE_MIN_AGE: '投保人必须年满18周岁',
		TEXT_INSURE_SELECT_ONE: '最少添加1位被保人',
		TEXT_SAME_ERROR: '您输入的证件号码信息出现重复，请重新确认信息',
		TEXT_PEOPLE: '人',
		TEXT_SEX_ERROR: '被保险人性别与您选择的保费试算性别不符合，如需更改请返回产品详情页',
		TEXT_BIRTHDAY_ERROR: '被保险人出生日期与您保费试算选择的年龄范围阶段不符合，如需更改请返回产品详情页',
		TEXT_SAVE_INSURE: '将以上信息保存为常用联系人！',
		TEXT_UPLOAD_FORMAT_ERROR: '上传文件格式错误，请重新选择正确的的格式',
		TEXT_AGREE: '请选择同意授权内容',
		TEXT_TRAVEL_DESTINATION: '请选择出行目的地',
		TEXT_MUST_MYSEFT: '尊敬的用户，由于该产品规定满18周岁后，投保人应与被保险人保持一致，您输入的被保险人信息个数过多，导致不能投保，请确认后重新修改您的投保信息。',
		TEXT_DEFAULT_DECLARE: '<p>投保时，本投保人已就该产品的保障内容以及保险金额向被保险人进行了明确说明，并征得其同意。</p><p>本投保人兹声明上述各项内容填写属实，并知道如果投保信息不真实，保险公司将有权拒赔，一切后果由本人承担。</p><p>本投保人已阅读该产品详细条款<a href="#ProductClauseUrl#" target="_blank">[马上阅读条款]</a>，并特别就条款中有关责任免除和投保人、被保险人义务的内容进行阅读。本投保人特此同意接受条款全部内容。</p><p>根据《中华人民共和国合同法》第十一条规定，数据电文是合法的合同表现形式。本人接受保险公司在慧择网提供的电子保单作为本投保书成立生效的合法有效凭证，具有完全证据效力。</p>',

		TEXT_BENEFICIARY_ONE: '第一顺序受益人受益比例合计必须为100%',
		TEXT_BENEFICIARY_TWO: '第二顺序受益人受益比例合计必须为100%',

		TEXT_UPLOAD_MAX_SIZE_FN: function(size) {
			return '文件大小不能超过' + (size || this.SIZE_UPLOAD_IMAGE) + 'M';
		},

		TEXT_UPLOAD_ID_NAME: '身份证图像：',
		TEXT_UPLOAD_BTN_TEXT: '上传文件',
		TEXT_UPLOAD_DATA_ERROR: '请上传身份证正面',
		TEXT_UPLOAD_DATA_DEFAULTREMIND: '请上传身份证正面',
		TEXT_SUPPORT_IMG_FORMAT: '只支持图片文件，如.jpg、.jpeg、.gif、.png等。',
		TEXT_UPLOAD_IMG_INFO: '请上传身份证图像（正反面）',
		TEXT_UPLOAD_IMG_UPLOADING: "正在上传中.....",

		TEXT_UPLOAD_ID_IMG: '亲，根据《反洗钱法》的规定，保费超过20万需要上传身份证图像（正反两面）。',
		TEXT_MUST_MYSEFT_SAME: '尊敬的用户，由于该产品规定满18周岁后，投保人应与被保险人保持一致，请您将投保人信息修改成与被保险人一致。',
		TEXT_DIVIDEND: '您在投保时可选择以下任何一种红利领取方式<br />(1)现金领取：您可以在保单红利派发日领取红利，如果您未能在保单红利派发日领取，红利留存在本公司期间不产生利息。<br />(2)累积生息：红利留存在本公司，按我们每年确定的利率以复利方式生息，并在您申请或本合同终止时给付。',
		TEXT_AUTO_ADVANCE: '在续期保险费交费宽限期间结束时，投保人仍未交付续期保险费，若投保人在投保单上同意保险费自动垫交,本公司将以续期保险费交费宽限期结束之日本合同的"保证现金价值净额"自动垫交投保人应付的续期保险费，使合同继续有效。',
		TEXT_INSURANCE_START_DATE: '起保日期以保险公司出具的保险单正本（或承保确认函）为准，起保日期将不早于您的缴纳日期',
		TEXT_ELECTRONIC_INVOICING: '电子发票是个人的消费凭证，暂不能用于报销，与传统纸质发票具有同等法律效力，可作为用户维权的有效凭据。电子发票与纸质发票不可兼得。',
		TEXT_INSURANT_JUVENILES: '被保人为未成年人，被保人只能为投保人的子女或法定监护对象',
		TEXT_HIGH_PREMIUM_OVER: '保监会规定单笔保费不能超过20万哦~您可以降低保额或者分几单提交投保！',
		TEXT_ARRAY_NAME: [],
		TEXT_DATA_ERROR: '时间错误',
		DEFAULTOPTION: '<option value="">请选择</option>',
		TEXT_DELETED_TYPE_INSURANT: 'more',
		TEXT_DELETED_TYPE_BENEFICIARY: 'beneficiary',
		//获取地区  	
		getPropertyAreaUrl: API_DOMAIN + '/hzapi/areaQuery/getAreaData', //财产所在地
		getInsureAreaUrl: API_DOMAIN + '/hzapi/restrictRuleQuery/getInsureArea', //获取投保地区
		getAllAreaUrl: API_DOMAIN + '/hzapi/areaQuery/getAllAreaData',
		//获取职业
		getJobUrl: API_DOMAIN + '/hzapi/companyjob/list-by-productid-jobparentid', //获取职业
		searchJobUrl: API_DOMAIN + '/hzapi/companyjob/list-by-productid',
		//出行目的地国家
		getDestinationUrl: API_DOMAIN + '/hzapi/areaQuery/getDestinationHuize',
		HOMEPAGE: "//www.huize.com",
		HEIGHTPRICE: 200000, //高保费
	};
	return InsureText;
});