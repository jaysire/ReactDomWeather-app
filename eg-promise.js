// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }

// getTempCallback('Philadelphia', (err, temp) => {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }

//   function getTempPromise(location) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(79);
//         reject('City not found');
//       }, 1000);
//     });
//   }

//   getTempPromise('Philadelphia').then((temp) => {
//     console.log('Promise success', temp);
//   }, (err) => {
//     console.log('Promise error', err);
//   });
// });


function addPromise(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('a & b NOT numbers!!');
    }
  });
}

// the .then method takes in two parameter that are functions. i.e callback functions.
addPromise(5, 5).then((sum) => {
  console.log('success', sum);
}, (err) => {
  console.log('error', err);
});

addPromise('josiah', 9).then((sum) => {
  console.log('this should not show up');
}, (err) => {
  console.log('WARNING!! ERROR!! CANNOT COMPUTE!!', err);
});

// // The first Promise function returns a 'new Promise instance' which takes two parameters: resolve and reject.
// // this ensures we can't have both instancese of successs & error/ failutre, happening at the same time as it was in the case with the getTempCallback. (two codes dont get fired at the same time).
// // Eventhough resolve & reject were both called the Promise can ONLY complete once/ only run instance at a time. i.e either reject or resolve, but NOT BOTH at the same time or one instance called twice.
// // then is a Promise inbuit method that takes two functions which each take one parameter.

// // NOTE: Since in these cases  we resolve or reject or call the callback right away, thus eliminating the need for using callback or Promise. Thus we fake the delay using setTimeout.
// //  We fake/ simulate delay using setTimeout and it takes a function to run.
// // 1000 miliseconds = 1 second.
