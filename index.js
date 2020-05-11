var bleno = require('bleno');
console.log('Hello Bleno');

console.log('bleno - echo');


bleno.on('stateChange', function(state) {
  console.log('on -> stateChange: ' + state);

  if (state === 'poweredOn') {
    bleno.startAdvertising('echo', ['ec00']);
  } else {
    bleno.stopAdvertising();
  }
});

bleno.on('advertisingStart', function(error) {
    console.log('on -> advertisingStart: ' + (error ? 'error ' + error : 'success'));
  
    
  });