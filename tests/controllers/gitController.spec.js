var rewire = require('rewire');
var GitCtrl = rewire('../../controllers/gitController');
var gitController = GitCtrl();
var chai = require('chai');
var sinon = require('sinon');

chai.should();

var getUser; // put into global scope, this is an antipattern

describe('GitController', function() {
    beforeEach(function() {
        // extract the git service from the rewire call
        var gitService = GitCtrl.__get__('gitService');
        // put a spy on the getUser of the captured service
        getUser = sinon.spy(gitService, 'getUser');
        // save the edited captured service
        GitCtrl.__set__('gitService', gitService);
    } );
    it('should get user and repos from git service', function(done) {
        
        this.timeout(10000);
        
        var req = {params:{userId:'jonathanfmills'}};
        
        var res = {json : test};
        
        function test(user) {
            getUser.getCall(0).args[0].should.equal('jonathanfmills');
            getUser.calledOnce.should.be.true;
            user.login.should.equal('jonathanfmills');
            done();
        }
        
        gitController.userGet(req, res);
    })
})