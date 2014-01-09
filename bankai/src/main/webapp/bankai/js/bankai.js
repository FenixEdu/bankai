/**********************
 * Bankai v0.0.1
 *
 * Development Team:
 *  David Martinho
 *  Pedro Santos
 *  Sérgio Silva
 **********************/
define([ 'backbone', 'marionette', 'app', 'router', 'modalRegion', 'supportFormModel', 'supportFormView',
		'i18n!nls/messages', 'i18n!bankai/nls/messages' ], function(Backbone, Marionette, App, Router, ModalRegion, SupportFormModel, SupportFormView,
		i18n, bankaiI18N) {

	var redirect = function() {
		location.href= location.origin + contextPath
	};

	var supportform = function(data) {
        var model = new SupportFormModel(JSON.parse(data.responseText));
        App.modal.show(new SupportFormView({
            model : model
        }));
        $('.modal').modal('show');
	};

	$.ajaxSetup({
		statusCode : {
			401 : redirect,
			403 : redirect,
			// disabled until sotis returns other than 500 for handled server errors
//			500 : supportform,
		}
	});
	
	
		var templateCaches = {};
		Backbone.Marionette.Renderer.render = function(template, data) {
			if (data != undefined) {
				if (typeof BennuPortal !== "undefined") {
					BennuPortal.addMls(data);
				}
				data["_abv"] = function() {
					return function(val) {
						if (this[val]) {
							var maxLength = 15;
							var text = this[val];
							if (text && text.length > maxLength) {
								return this[val].substring(0, maxLength) + "...";
							}
							return text;
						}
						return "";
					};
				};
				data["_i18n"] = function() {
					return function(val) {
					    val = Mustache.to_html(val, this);
						if (i18n[val]) {
							return i18n[val];
						}
						if (bankaiI18N[val]) {
							return bankaiI18N[val];
						}
						return "!!_i18n_" + val + "_i18n_!!";
					};
				};
				data["_noti18n"] = function() {
					return function(val) {
						if (i18n[data[val]]) {
							return i18n[data[val]];
						}
						return "";
					};
				};
			}
			var rawTemplate = template;
			if (template.indexOf("#") == 0) {
				var cachedTemplate = templateCaches[template];
				if (!cachedTemplate) {
					cachedTemplate = $(template).html();
					templateCaches[template] = cachedTemplate;
				}
				rawTemplate = cachedTemplate;
			}
			return Mustache.to_html(rawTemplate, data);
		};

	App.addRegions({
		page : "#portal-container",
	        modal: ModalRegion,
	});

	App.addInitializer(function() {
		App.Router = new Router();
		Backbone.history.start();
	});

	App.start();

});
