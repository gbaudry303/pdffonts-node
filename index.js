// Wrapper module for the linux utility pdffonts.

var exec = require('child_process').exec;

module.exports = {
  process: function(pdfFileName, next) {
    // The output of the system call to pdffonts needs to be treated to be able to parse.
    // var endResult = ['fsdfs'];

    // exec('pdffonts /home/guillaume/pdffonts-node/test/test.pdf', function (error, stdout, stderr) {
    exec('pdffonts /home/guillaume/pdffonts-node/test/test.pdf', function (error, stdout, stderr) {
      console.log(error);
      console.log(stdout);
      console.log(stderr);

      if (err) return next(err);
      if (stderr) return next(stderr); // if stderr is an error obj
     return next(null, stdout);
    });

    // console.log("dasdasdas")
    // exec('pdffonts ' + pdfFileName, function (error, stdout, stderr) {
    //   console.log(error);
    //   var outputString = String(stdout);
    //   var outputString = outputString.replace(/\sType\s/g, '-Type-')
    //   // console.log(outputString);

    //   var headerStrippedOutput = outputString.split('--').pop();
    //   var arrayFontsDataRow = headerStrippedOutput.split('\n');
    //   arrayFontsDataRow.splice(0,1);
    //   arrayFontsDataRow.splice(-1,1);

    //   for (var i=0,  tot=arrayFontsDataRow.length; i < tot; i++) {
    //       var tmpArray = arrayFontsDataRow[i].split(/\s+/);
    //       endResult.push({
    //         'name': tmpArray[0],
    //         'type': tmpArray[1],
    //         'encoding': tmpArray[2],
    //         'embedded': tmpArray[3] === 'yes' ? true : false,
    //         'subset': tmpArray[4] === 'yes' ? true : false,
    //         'unicode': tmpArray[5] === 'yes' ? true : false,
    //         'object': tmpArray[6],
    //         'id': tmpArray[7]
    //     });
    //   }
    //   // console.log(endResult);
    //   return endResult;
    // });
    // return;
    // return endResult;
  }

};