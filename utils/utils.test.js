const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');
});

it('should square a number', () => {
  var res = utils.square(3);

  expect(res).toBe(9).toBeA('number');
});

it('the asyncadd should add two numbers',(done)=>{
  utils.asnycAdd(3,5,(res)=>{
    expect(res).toBe(8).toBeA('number');
    done();
  })
})
it('its should multiply the number with same number',(done)=>{
  utils.asyncsquare(4,(res)=>{
    expect(res).toBe(16).toBeA('number');
    done();
  })
})

// should verify first and last names are set
// assert it includes firstName and lastName with proper values
// it('should set firstName and lastName', () => {
//   var user = {location: 'dl', age: 12};
//   var res = utils.setName(user, 'ra ye');
//
//   expect(res).toInclude({
//     firstName: 'Andrew',
//     lastName: 'Mead'
//   });
// });

// it('should expect some values', () => {
//   // expect(12).toNotBe(12);
//   // expect({name: 'andrew'}).toNotEqual({name: 'Andrew'});
//   // expect([2,3,4]).toExclude(1);
//   expect({
//     name: 'Andrew',
//     age: 25,
//     location: 'Philadelphia'
//   }).toExclude({
//     age: 23
//   })
// });
