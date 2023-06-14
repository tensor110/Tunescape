

const https = require('https');
const fs = require('fs');

const file = fs.createWriteStream('output.mp3');
const uri = 'http://sndup.net/c879';

https.get(uri, (response) => {
  response.pipe(file);
});
