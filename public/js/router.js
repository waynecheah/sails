define(['backboneView'], function(View) {
    var AppRouter = Backbone.Router.extend({
        currentView: null,

        routes: {
            'index': 'index'
        },

        changeView: function(View) {
            if (null != this.currentView) {
                this.currentView.undelegateEvents();
            }
            this.currentView = View;
            this.currentView.render();
        },

        index: function() {
            this.changeView(new nameView({
                collection: nameCollection
            }));
        }
    });

    return new AppRouter();
});

