// Wrapper module for the linux utility pdffonts.

module.exports = {
  process: function(pdfFileName) {
    // The output of the system call to pdffonts needs to be treated to be able to parse.
    var endResult = [];

    exec('pdffonts ' + pdfToProcess, function (error, stdout, stderr) {
      var outputString = String(stdout);
      var outputString = outputString.replace(/\sType\s/g, '-Type-')

      var headerStrippedOutput = outputString.split('--').pop();
      var arrayFontsDataRow = headerStrippedOutput.split('\n');
      arrayFontsDataRow.splice(0,1);
      arrayFontsDataRow.splice(-1,1);

      for (var i=0,  tot=arrayFontsDataRow.length; i < tot; i++) {
          var tmpArray = arrayFontsDataRow[i].split(/\s+/);
          endResult.push({
            'name': tmpArray[0],
            'type': tmpArray[1],
            'encoding': tmpArray[2],
            'embedded': tmpArray[3] === 'yes' ? true : false,
            'subset': tmpArray[4] === 'yes' ? true : false,
            'unicode': tmpArray[5] === 'yes' ? true : false,
            'object': tmpArray[6],
            'id': tmpArray[7]
        });
      }
      return endResult;
    });
  }

};