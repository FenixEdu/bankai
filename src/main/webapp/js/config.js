require.config({

    paths: {
        'bankai': '../bankai',
        'jquery': 'libs/jquery/jquery',
        'jquery-ui': 'libs/jquery/jquery-ui',
        'jquery.tokeninput': 'libs/jquery/jquery-tokeninput',
        'jquery-datatables': 'libs/jquery/jquery-datatables',
        'jquery-scroll': 'libs/jquery/jquery-scrollTo',
        'less': 'libs/less/less',
        'moment': 'libs/moment/moment',
        'moment-pt': 'libs/moment/lang/pt',
        'underscore': 'libs/underscore/underscore',
        'mustache': 'libs/mustache/mustache',
        'bootstrap-notify': 'libs/bootstrap/bootstrap-notify',
        'backbone': 'libs/backbone/backbone',
        'marionette': 'libs/backbone/backbone.marionette',
        'paginator': 'libs/backbone/backbone.paginator',
        'jquery-bootstrap': 'libs/bootstrap/bootstrap',
        'text': 'libs/require/text',
        'i18n': 'libs/require/i18n',
        'collections': '../'+Bankai.appName+'/js/collections',
        'models': '../'+Bankai.appName+'/js/models',
        'views': '../'+Bankai.appName+'/js/views',
        'client-factory': '../'+Bankai.appName+'/js/client-factory',
        'templates': '../'+Bankai.appName+'/templates',
        'layouts': '../'+Bankai.appName+'/js/layouts',
        'layoutTemplates': '../'+Bankai.appName+'/templates/layout'
    },

    config: {
        //Set the config for the i18n
        //module ID
        i18n: {
            locale: (typeof BennuPortal !== "undefined")?BennuPortal.locale.tag.toLowerCase():"en-en"
        }
    },

    shim: {
        'moment': {
            exports: 'moment'
        },
        'underscore': {
            exports: '_'
        },
        'jquery-ui': {
            deps: ['jquery'],
            exports : 'jquery-ui'
        },
        'jquery-bootstrap': {
            deps: ['jquery'],
            exports: 'jquery'
        },
        'jquery-datatables': {
        	deps: ['jquery'],
        	exports:'jquery-datatables'
        },
		'jquery-scroll': {
			deps: ['jquery']
		},
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'marionette': {
            deps: ['backbone'],
            exports: 'Backbone.Marionette'
        }
    },

    deps: ['main']
});
