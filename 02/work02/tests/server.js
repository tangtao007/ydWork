import request from 'supertest';
import app from '../dist/app.js';

function requestTest(){
  return request(app.listen());
}

describe('测试路由', function() {
  it('点赞', function(done) {
    requestTest()
      .get('/update')
      .expect(200)
      .end(function(err,res){
        if(res.data==1){
          return done(err);
        }
        done();
      });
  });
});