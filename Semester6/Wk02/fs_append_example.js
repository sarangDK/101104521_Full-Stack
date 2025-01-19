const fs = require('fs');

async function addHeader(fileName) {
  try {
    await fs.promises.appendFile(fileName, 'StudentId,FirstName,LastName\n');
    console.log('Header added');
  } catch (error) {
    console.log('Error while appending header:', error);
  }
}

async function appendData(fileName, sid, fnm, lnm) {
  try {
    await fs.promises.appendFile(fileName, `${sid},${fnm},${lnm}\n`);
    console.log('Student record added');
  } catch (error) {
    console.log('Error while appending student data:', error);
  }
}

const file = 'student.csv';
// addHeader(file);
appendData(file, 1, 'Steven', 'Park');
appendData(file, 2, 'Haley', 'Kim');
