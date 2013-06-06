var TestController = {
    info: function (req,res) {
        res.send(req.app.settings);
    },

    index: function (req,res) {
        console.log(sails.config);
        //sails.express.app.engine('.html', sails.config.viewEngineModule.renderFile);
        res.view({
            env: req.app.settings.env
        });
    }
};

module.exports = TestController;