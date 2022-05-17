const getInstance = require('./XMLConverter');
const jdonData = require('../../order.json');
const {convertToXML} = require('../../src/xmlConverter/XMLConverter');

describe('Testing xmlConverter/XMLConverter.js Constructor->', () => {
  it('Without jsonData Arg', async() => {
    expect(() => getInstance()).toThrowError();
  });

  it('Full args', async() => {
    expect(() => getInstance(jdonData)).not.toThrowError();
  });
});
