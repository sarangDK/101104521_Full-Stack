const fs = require('fs');
const zlib = require('zlib');
const { ToLowerCasePipe } = require('./ToLowerCasePipe');
const ToWordsPipe = require('./ToWordPipe');

const readStream = fs.createReadStream('input_stream.txt');
const writeStream = fs.createWriteStream('output_stream.txt');

readStream.on('data', (chunk) => {
  console.log(chunk);
});

readStream.on('end', () => {
  console.log('Data read end');
});

readStream.on('error', (err) => {
  console.log(`error read stream ${err}`);
});

readStream.on('close', () => {
  console.log('read stream close');
});

writeStream.write('Hello');
writeStream.write('World');
writeStream.write('NodeJS');
writeStream.end();

// pipes
readStream.pipe(writeStream);
readStream.pipe(zlib.createGzip()).pipe(fs.createWriteStream('stream.zip'));

const toLowerCasePipe = new ToLowerCasePipe();
readStream.pipe(toLowerCasePipe).pipe(fs.createWriteStream('lowercase_output.txt'));


readStream.pipe(ToWordsPipe).pipe(fs.createWriteStream('toWord.txt'));