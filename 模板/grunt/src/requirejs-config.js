/*
  Requirejs配置文件
  最后更新时间：2016-04-15 12:04:09  
*/
var fileVersion = {
    "jquery": "//static.huizecdn.com/js/libs/jquery/1.8.0/jquery.min",
    "underscore": "//static.huizecdn.com/js/libs/underscore/1.8.3/underscore.min",
    "my-calendar": "//static.huizecdn.com/js/plugins/my-calendar/build/my-calendar.min",
    "require-text": "//static.huizecdn.com/js/plugins/require-text/text.min",
    "require-css": "//static.huizecdn.com/js/plugins/require-css/css.min",
    "jquery-tab": "//static.huizecdn.com/js/plugins/jquery-tab/build/jquery-tab",
    "jquery-placeholder": "//static.huizecdn.com/js/plugins/placeholder/build/jquery-placeholder",
    "base": "//static.huizecdn.com/js/base/src/base",
    "layer":"//static.huizecdn.com/js/plugins/layer/1.9.3/layer",
    "jquery-prompt":"//static.huizecdn.com/js/plugins/jquery-prompt/build/jquery-prompt",
    "kkpager":"//static.huizecdn.com/js/plugins/kkpager.min",
    "es5-shim":"http://static.huizecdn.com/js/plugins/es5-shim/es5-shim.min",
    "my-calendar":"//static.huizecdn.com/js/plugins/my-calendar/build/my-calendar.min",
    "helper": "//static.huizecdn.com/js/hz/www/src/com/helper.js?v=740438f79074279f4a801a9b7a4fc526",
    "jquery-plugins": "//static.huizecdn.com/js/hz/www/src/com/jquery-plugins.js?v=13c7149b16bcae28d16a0323722b839b",
    "main": "//static.huizecdn.com/js/hz/www/src/com/main.js?v=24f7e088005640ca57c2b960da998cf5",
    "all-comments": "//static.huizecdn.com/js/hz/www/src/comment/all-comments.js?v=761de713b45c76ec3198bbd7b5f77aec",
    "post-comment": "//static.huizecdn.com/js/hz/www/src/comment/post-comment.js?v=c6e90232a36cd2797da362fee2668eb1",
    "insure-contacts": "//static.huizecdn.com/js/hz/www/src/insure/insure-contacts.js?v=c9a3e00afd25dd37488077adcae21984",
    "insure-destination": "//static.huizecdn.com/js/hz/www/src/insure/insure-destination.js?v=940eea1158a2f980f6619ad96764cc06",
    "insure-event": "//static.huizecdn.com/js/hz/www/src/insure/insure-event.js?v=a508ddc7ac6eb341c987bdcb7fe4fbae",
    "insure-hz": "//static.huizecdn.com/js/hz/www/src/insure/insure-hz.js?v=d288f44b1620eb7665c15dc1c2c7efab",
    "insure-id": "//static.huizecdn.com/js/hz/www/src/insure/insure-id.js?v=f31b6a6f1d413f2825d4f8d338a62245",
    "insure-render": "//static.huizecdn.com/js/hz/www/src/insure/insure-render.js?v=59a6a6f624f828e678f3b0202865c691",
    "insure-team": "//static.huizecdn.com/js/hz/www/src/insure/insure-team.js?v=9dd23565f72cc2659c9fd05f2bedab85",
    "insure-text": "//static.huizecdn.com/js/hz/www/src/insure/insure-text.js?v=c2abf133f355cefeda394050407b3900",
    "insure-validate": "//static.huizecdn.com/js/hz/www/src/insure/insure-validate.js?v=fcaee89d5359372be5cc10684d0003e7",
    "insure": "//static.huizecdn.com/js/hz/www/src/insure/insure.js?v=85720a2110c1951d2e222aa0495268cf",
    "test-data": "//static.huizecdn.com/js/hz/www/src/insure/test-data.js?v=790c5cf5829bc1d8f3ea8fa80bc3717b",
    "fix-float": "//static.huizecdn.com/js/hz/www/src/plugins/fix-float.js?v=f9949f1a10aeaeb39397175954dc3908",
    "fixed-tool-float": "//static.huizecdn.com/js/hz/www/src/plugins/fixed-tool-float.js?v=0af3c0e20be64f149612652f616ca563",
    "share-panel": "//static.huizecdn.com/js/hz/www/src/plugins/share-panel.js?v=79a6adfe6e24a99470b3ab495eae97e5",
    "sign-float": "//static.huizecdn.com/js/hz/www/src/plugins/sign-float.js?v=d1418590cccccf9df578fd3dd7d92a7b",
    "sub-menu": "//static.huizecdn.com/js/hz/www/src/plugins/sub-menu.js?v=7a782a064330a37e02969c8121d622de",
    "top-menu": "//static.huizecdn.com/js/hz/www/src/plugins/top-menu.js?v=ff790224581e015bf3f4e98e267b9bd3",
    "compare": "//static.huizecdn.com/js/hz/www/src/product/compare.js?v=435d399ac1e003a4f3b78ae4859a7b42",
    "data": "//static.huizecdn.com/js/hz/www/src/product/data.js?v=47b5caa7e06c4c47f5102d952cc3ecec",
    "detail": "//static.huizecdn.com/js/hz/www/src/product/detail.js?v=4f8a391c4f34e5bc970caf1f82d91fae",
    "job": "//static.huizecdn.com/js/hz/www/src/product/job.js?v=3ed55c5dc1274fbb0f4d221c890e7568",
    "product": "//static.huizecdn.com/js/hz/www/src/product/product.js?v=3e7855fa2560fdc033ebfae0755d9656",
    "trial-render": "//static.huizecdn.com/js/hz/www/src/product/trial-render.js?v=319d56122972793508ac3edaec4d3210",
    "trial": "//static.huizecdn.com/js/hz/www/src/product/trial.js?v=36dcc447db17de71b72da25ea9388b4b",
    "requirejs-aliases": "//static.huizecdn.com/js/hz/www/src/requirejs-aliases.js?v=a89fd42de4d96d0806ee13ea62bdc815",
    "requirejs-config": "//static.huizecdn.com/js/hz/www/src/requirejs-config.js?v=2606dcff21329860ad0101e7918ad3aa",
    "shopping-car": "//static.huizecdn.com/js/hz/www/src/shopping-car/shopping-car.js?v=34b4250921b90500b558eb57edf82457",
};
requirejs.config({
    baseUrl: '',
    paths: fileVersion,
    waitSeconds: 0, //超时时间
    shim: { //deps依赖关系
        jquery: {
            exports: '$'
        },
        'jquery-placeholder': {
            deps: ['jquery']
        },
        'jquery-prompt': {
            deps: ['jquery']
        },
        'layer': {
            exports: 'layer',
            deps: ['jquery', 'css!layer-css']
        },
        'my-calendar': {
            exports: 'MyCalendar',
            deps: ['css!my-calendar-css']
        },
        'kkpager': {
            deps: ['css!kkpager-css']
        },
        'jquery-bxslider': {
            deps: ['jquery', 'css!jquery-bxslider-css']
        }
    },
    map: {
        '*': {
            'css': 'require-css',
            'layer-css': '//static.huizecdn.com/js/plugins/layer/1.9.3/skin/layer',
            'kkpager-css': '//static.huizecdn.com/js/plugins/kkpager_blue',
            'jquery-bxslider-css': '//static.huizecdn.com/js/plugins/jquery-bxslider',
            'my-calendar-css': '//static.huizecdn.com/js/plugins/my-calendar/stylesheets/calendar'
        }
    }
});