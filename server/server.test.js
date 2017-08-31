const request = require('supertest');
app = require('./server').app;
var expect = require('expect');

it('Its should pass the following conditions',(done)=>{

  request(app)
  .get('/')
  .expect(200)
  .expect((res)=>{
    expect(res.body).toInclude()
  })
  .end(done);


});
