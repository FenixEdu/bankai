define([
    'marionette',
    'text!templates/HelloWorld.html'
], function(Marionette, tpl) {

    return Marionette.ItemView.extend({
    	template : tpl
    });
    
});
