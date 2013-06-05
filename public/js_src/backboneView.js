define(function(require) {
    var BackboneView = Backbone.View.extend({
        requireLogin: true
    });

    return BackboneView;
});

// require(['jQuery', 'backboneView', 'collectionView'], function($, View, CollectionView){ ... });
define('collectionView', function(){
    var collectionView = Backbone.View.extend({
        el: $('#content'),
        collection: null,
        modelView: null,
        listEl: '.module_list',

        initialize: function() {
            if (!this.collection) {
                console.error('Collection instance is undefined in new CollectionView instance');
                return;
            }
            if (!this.modelView) {
                console.error('ModelView instance is undefined in new CollectionView instance');
                return;
            }

            this.collection.on('reset', this.renderCollection, this);
        },

        render: function() {
            //this.$el.html();
        },

        renderCollection: function(collection) {
            var modelView = this.modelView;

            $(this.listEl).empty();
            collection.each(function(model) {
                var statusHtml = (new modelView({ model: model })).render().el;
                $(statusHtml).appendTo(listEl);
            });
        }
    });

    return collectionView;
});
