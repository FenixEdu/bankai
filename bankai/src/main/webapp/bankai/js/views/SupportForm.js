define([ 'jquery', 'marionette', 'text!bankaiTemplates/SupportForm.html' ],

function($, Marionette, tpl) {
    return Marionette.ItemView.extend({
        template : tpl,

        events : {
            'click #support-submit' : 'supportSubmit',
        },
        
        supportSubmit : function(e) {
            e.preventDefault();
            this.model.set('comment', $('textarea[name="comment"]').val());
            console.log(this.model.toJSON());

            this.model.save();
        },
    });
});