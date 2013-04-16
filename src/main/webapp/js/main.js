require([
    'jquery',
    'jquery.bootstrap',
    'backbone',
    'mustache',
    'marionette',
    'app',
    'router',
    'client-factory',
    'i18n!nls/messages'
], function($, jQueryBootstrap, Backbone, Mustache, Marionette, App, Router, ClientFactory, i18n) {

    $.ajaxSetup({
        statusCode : {
            401 : function() {
                // Redirect the to the login page.
                Bankai.router.navigate("login", true);
            },
            403 : function() {
                // 403 -- Access denied
                Bankai.router.navigate("login", true);
            }
        }
    });

    Backbone.emulateJSON = true;

    Backbone.Marionette.Renderer.render = function(template, data) {
        data['_abv'] = function() {
            return function(val) {
                var maxLength = 15;
                var text = this[val];
                if(text.length > maxLength) {
                    return this[val].substring(0,maxLength)+"...";
                }
                return text;
            }
        };
        data['_i18n'] = function() {
            return function(val) {
                return i18n[val];
            }
        }
        data['_noti18n'] = function() {
            return function(val) {
                return i18n[data[val]];
            }
        }
        return Mustache.to_html(template, data);
    }

    App.addRegions({
        page: "#content"
    });

    App.addInitializer(function() {
        Bankai.initialize();
        Backbone.history.start();
    });

    Bankai.page = App.page;

    App.start();

});