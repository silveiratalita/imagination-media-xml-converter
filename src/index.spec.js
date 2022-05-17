const index = require('./index');
const jsonData = require('../order.json');

describe('Testing index.js export ->', () => {
  it('Should Export Function getInstance', async() => {
    expect(index.getInstance).toEqual(jasmine.any(Function));

    index.getInstance(jsonData);
  });
});
