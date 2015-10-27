var should = require('should');

var user = {
    name: 'tj'
  , pets: ['tobi', 'loki', 'jane', 'bandit']
};

describe('#test', function(){
    it('should 檢查user data', function(done){
        user.should.have.property('name', 'tj');
        user.should.have.property('pets').with.lengthOf(4);
        done();
    });
});
