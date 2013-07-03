define([ 'underscore', 'backbone', 'marionette', 'app',
         'views/HelloWorld'
		],
		function(_,  Backbone, Marionette, App,
				HelloWorldView
				) {

			var Router = Backbone.Marionette.AppRouter.extend({

				appRoutes : {
					"" : "home",
				},

				controller : {
					home : function() {
						var view = new HelloWorldView();
						App.page.show(view);
					},
				}
			});
			return Router;
		});