import request from 'supertest';
import app from '../app.es';

function requestTest(){
  return request(app.listen());
}

describe('测试路由', function() {
  it('点赞', function(done) {
    request(app)
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