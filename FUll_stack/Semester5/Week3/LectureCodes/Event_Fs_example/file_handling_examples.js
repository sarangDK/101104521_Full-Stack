const fs = require('fs');

// Read file

console.log('** start reading a asynchronous file');

// Readfile synchronously
const data = fs.readFileSync('data.txt', 'utf8');
console.log(data);
console.log('** End of the file')

console.log('** start reading a file');

function readFileAsync() {
// Read file asynchronously (non-blocking)
  fs.readFile('data.txt', 'utf8', (err, data) => {
      if (err) {
          console.error(err);
          return;
      }
      console.log(data);
});
}

console.log('** End of the asynchorusly file')


// readFileAsync();

console.log('** start writing a file');
//write file synchronously

const dataToWrite = 'Hello, Node.js';
fs.writeFileSync('output.txt', dataToWrite, 'utf8');
console.log('** End of the file')



//  Delete file 

// fs.unlink('output.txt', (err) => {
//   if (err) {
//       console.error(err);
//       return;
//   }
//   console.log('File has been deleted');
// });

// Rename file 
fs.rename('output.txt', 'new_output.txt', (err) => {
  if (err) {
      console.error(err);
      return;
  }
  console.log('File has been renamed');
});

// Rename file and move to another directory
fs.rename('new_output.txt', './data/new_output.txt', (err) => {
  if (err) {
      console.error(err);
      return;
  }
  console.log('File has been moved');
});