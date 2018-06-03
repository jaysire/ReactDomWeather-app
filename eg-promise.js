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

  function getTempPromise(location) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(79);
        reject('City not found');
      }, 1000);
    });
  }

  getTempPromise('Philadelphia').then((temp) => {
    console.log('Promise success', temp);
  }, (err) => {
    console.log('Promise error', err);
  });
});

