({
    appDir : "${r.js.app.dir}",
    baseUrl : "js",

    paths : {
        'jquery' : 'empty:',
        'jquery.ui' : 'empty:',
        'jquery.tokeninput' : 'empty:',
        'jquery.datatables' : 'empty:',
        'jquery.scroll' : 'empty:',
        'jquery.form' : 'empty:',
        'jquery.tagcloud' : 'empty:',
        'jquery.tagsinput' : 'empty:',
        'jquery.bootstrap' : 'empty:',
        'moment' : 'empty:',
        'moment.pt' : 'empty:',
        'underscore' : 'empty:',
        'mustache' : 'empty:',
        'bootstrap.notify' : 'empty:',
        'backbone' : 'empty:',
        'paginator' : 'empty:',
        'marionette' : 'empty:',
        'less' : 'empty:',
        'text' : 'libs/require/text',
        'i18n' : 'libs/require/i18n',
        'modalRegion' : 'views/Modal',
        'supportFormModel' : 'models/SupportForm',
        'supportFormView' : 'views/SupportForm',
        'bankaiTemplates' : '../templates',
        'nls/messages' : "empty:",
        'router' : 'empty:'
    },

    locale : "pt-pt",
    skipModuleInsertion : true,
    findNestedDependencies : false,
    skipDirOptimize : false,
    removeCombined : true,
    modules : [ {
        name : "bankai",
        exclude : [ 'text', 'i18n' ]
    } ],
    dir : "${r.js.dir}",
    optimize : "uglify2",
    uglify2 : {
        output : {
            beautify : false
        },
        compress : true,
        mangle : true
    },

})
