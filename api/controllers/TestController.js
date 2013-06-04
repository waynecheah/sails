var TestController = {

   index: function (req,res) {
        console.log(req.app.settings);
        res.view({
            env: req.app.settings.env
        });
    }

};

module.exports = TestController;