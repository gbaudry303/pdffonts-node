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


### What this module does?
It takes this from command line tool `pdffonts`
```
name                                 type              encoding         emb sub uni object ID
------------------------------------ ----------------- ---------------- --- --- --- ---------
BAAAAA+DejaVuSans-Bold               TrueType          WinAnsi          yes yes yes    101  0
CAAAAA+DejaVuSans                    TrueType          WinAnsi          yes yes yes    106  0
```
and transform into this for your node app:
```
[ { name: 'BAAAAA+DejaVuSans-Bold',
    type: 'TrueType',
    encoding: 'WinAnsi',
    embedded: true,
    subset: true,
    unicode: true,
    object: '101',
    id: '0' },
  { name: 'CAAAAA+DejaVuSans',
    type: 'TrueType',
    encoding: 'WinAnsi',
    embedded: true,
    subset: true,
    unicode: true,
    object: '106',
    id: '0' } ]
```