
var gitService = require('../services/gitService')(); // parents at the end means create an object
module.exports = function () {
    var userGet = function (req, res) {
        var userId = req.params.userId;

        gitService.getUser(userId).then(function (user) {
            res.json(user);
        });
        
    }
    return {
        userGet: userGet
    }
};