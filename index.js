const https = require('https');
const crypto = require('crypto');
const fs = require('fs');

const start = Date.now();

function doRequest() {
    https.request('https://www.google.com', res => {
        res.on('data', () => { });
        res.on('end', () => {
            console.log('Request: ', Date.now() - start);
        });
    }).end();
}


function doHash() {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        console.log('Hash: ', Date.now() - start);
    });
}


function doFs() {
    fs.readFile('fsReadFileSample.txt', 'utf8', () => {
        console.log('FS: ', Date.now() - start);
    });
}

doRequest(); // os tasks
doFs(); // libuv
doHash(); // libuv
doHash(); // libuv
doHash(); // libuv
doHash(); // libuv
