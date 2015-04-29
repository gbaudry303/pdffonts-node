pdffonts-node
===========
node module for the linux utility pdffonts.
Requires pdffonts to be present.
http://www.linuxcommand.org/man_pages/pdffonts1.html

### Usage:
```
var pdffonts = require(pdffonts-node),
  getFonts = pdffonts.process;

getFonts('test/test.pdf', function(err, result) {
  console.log(result);
});
```

### Test:
put a pdf containing text in the test folder.