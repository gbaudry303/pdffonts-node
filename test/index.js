var should = require('chai').should(),
    pdffonts = require('../index'),
    getFonts = pdffonts.process;

describe('process methods of module', function() {
  it('get fonts with valid properties', function() {
    // var result = getFonts('/home/guillaume/pdffonts-node/test/test.pdf');
    getFonts('/test/test.pdf', function(err, result) {
      console.log(result);
      result.should.be.a('array');
   });
  });
});