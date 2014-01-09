require.config({

    baseUrl : "./js",
    paths : {
        'bankai' : '../../bankai/js/bankai',
        'jquery' : '../../bankai/js/libs/jquery/jquery',
        'jquery.ui' : '../../bankai/js/libs/jquery/jquery-ui',
        'jquery.tokeninput' : '../../bankai/js/libs/jquery/jquery-tokeninput',
        'jquery.datatables' : '../../bankai/js/libs/jquery/jquery-datatables',
        'jquery.scroll' : '../../bankai/js/libs/jquery/jquery-scrollTo',
        'jquery.form' : '../../bankai/js/libs/jquery/jquery.form',
        'jquery.tagcloud' : '../../bankai/js/libs/jquery/jquery.tagcloud',
        'jquery.tagsinput' : '../../bankai/js/libs/jquery/jquery.tagsinput',
        'jquery.bootstrap' : '../../bankai/js/libs/bootstrap/bootstrap',
        'moment' : '../../bankai/js/libs/moment/moment',
        'moment.pt' : '../../bankai/js/libs/moment/lang/pt',
        'underscore' : '../../bankai/js/libs/underscore/underscore',
        'mustache' : '../../bankai/js/libs/mustache/mustache',
        'bootstrap.notify' : '../../bankai/js/libs/bootstrap/bootstrap-notify',
        'backbone' : '../../bankai/js/libs/backbone/backbone',
        'marionette' : '../../bankai/js/libs/backbone/backbone.marionette',
        'paginator' : '../../bankai/js/libs/backbone/backbone.paginator',
        'text' : '../../bankai/js/libs/require/text',
        'i18n' : '../../bankai/js/libs/require/i18n',
        'less' : '../../bankai/js/libs/less/less',
        'modalRegion' : '../../bankai/js/views/Modal',
        'supportFormModel' : "../../bankai/js/models/SupportForm",
        'supportFormView' : "../../bankai/js/views/SupportForm",
        'bankaiTemplates' : "../../bankai/templates",
        'app' : '../../bankai/js/app',
        'collections' : 'collections',
        'models' : 'models',
        'views' : 'views',
        'templates' : '../templates',
        'layouts' : 'layouts',
    },

    locale : typeof BennuPortal != "undefined" ? BennuPortal.locale.tag.toLowerCase() : "pt-pt",

    shim : {
        moment : {
            exports : "moment"
        },

        underscore : {
            exports : "_"
        },
        'jquery.ui' : [ 'jquery' ],
        'jquery.datatables' : [ 'jquery' ],
        'jquery.form' : [ 'jquery' ],
        "jquery.tokeninput" : [ "jquery" ],
        "jquery.bootstrap" : [ "jquery" ],
        "jquery.scroll" : [ "jquery" ],
        'jquery.tagcloud' : [ "jquery" ],
        'jquery.tagsinput' : [ "jquery" ],

        backbone : {
            deps : [ 'jquery', 'underscore' ],
            exports : 'Backbone'
        },
        marionette : {
            deps : [ 'jquery', 'underscore', 'backbone' ],
            exports : 'Backbone.Marionette'
        },
        paginator : {
            deps : [ 'jquery', 'underscore', 'backbone' ],
            exports : 'Backbone.Paginator'
        },

    },

    deps : [ 'bankai' ]
});
