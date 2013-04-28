require([
    'jquery',
    'backbone',
    'mustache',
    'marionette',
    'app',
    '../'+Bankai.appName+'/js/router',
    'i18n!../'+Bankai.appName+'/js/nls/messages'
    ], function($, Backbone, Mustache, Marionette, App, Router, i18n) {

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
            if (data) {
                data['_mls'] = function() { 
                    return function(val) { 
                        if (this[val]) {
                            if (this[val].pt) {
                                return this[val].pt;
                            }
                            if (this[val]["pt-PT"]) {
                                return this[val]["pt-PT"];
                            }
                        }
                        return "";
                    };
                };
                data['_abv'] = function() {
                    return function(val) {
                        if (this[val]) {
                            var maxLength = 15;
                            var text = this[val];
                            if(text && text.length > maxLength) {
                                return this[val].substring(0,maxLength)+"...";
                            }
                            return text;
                        }
                        return "";
                    }
                };
                data['_i18n'] = function() {
                    return function(val) {
                        if (i18n[val]) {
                            return i18n[val];
                        }
                        return "!!_i18n_" + val + "_i18n_!!";
                    }
                };
                data['_noti18n'] = function() {
                    return function(val) {
                        if (i18n[data[val]]) {
                            return i18n[data[val]];
                        }
                        return "";
                    }
                };
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