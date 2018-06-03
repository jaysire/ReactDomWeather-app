function getTempCallback(location, callback) {
  callback(undefined, 78);
  callback('City not found');
}

getTempCallback('Philadelphia', (err, temp) => {
  if (err) {
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});

function getTempPromise(location) {
  return new Promise(((resolve, reject) => {
    setTimeout(() => {
      resolve(79);
      reject('City not found');
    });
  }));
}

getTempPromise('Philadelphia').then((temp) => {
  console.log('Promise success', temp)
}, (err) => {
  console.log('Promise error', err);
});

// The first Promise function returns a 'new Promise instance' which takes two parameters: resolve and reject.
// this ensures we can't have both instancese of successs & error/ failutre, happening at the same time as it was in the case with the getTempCallback. (two codes dont get fired at the same time).
// Eventhough resolve & reject were both called the Promise can ONLY complete once/ only run instance at a time. i.e either reject or resolve, but NOT BOTH at the same time.
// then is a Promise inbuit method that takes two functions which each take one parameter.
//  We fake delay/ simulate delay using setTimeout and it takes a function to run.
