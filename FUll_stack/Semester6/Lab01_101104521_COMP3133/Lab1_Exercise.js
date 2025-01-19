const fs = require('fs');
const csv = require('csv-parser');

const file = 'input_countries.csv';
const canada = 'canada.txt';
const usa = 'usa.txt';

// Question 1 - Delete existing files

if (fs.existsSync(canada)) {
  fs.unlink(canada, (err) => {
    if (err) {
      console.log('Error while deleting canada.txt:', err);
    } else {
      console.log('canada.txt deleted');
    }
  });
}

if (fs.existsSync(usa)) {
  fs.unlink(usa, (err) => {
    if (err) {
      console.log('Error while deleting usa.txt:', err);
    } else {
      console.log('usa.txt deleted');
    }
  });
}


// Comment out the code below if you want to delete the current files!!!! 
// Create write streams for the output

const canadaWriteStream = fs.createWriteStream(canada);
const usaWriteStream = fs.createWriteStream(usa);

// Write headers to the output 
canadaWriteStream.write('country, year, population\n');
usaWriteStream.write('country, year, population\n');

// Read the input file and write to the output files
fs.createReadStream(file).pipe(csv()).on('data', (row) => {
  if (row.country === 'Canada') {
    canadaWriteStream.write(`${row.country}, ${row.year}, ${row.population}\n`);
  } else if (row.country === 'United States') {
    usaWriteStream.write(`${row.country}, ${row.year}, ${row.population}\n`);
  }
}).on('end', () => {
  console.log("CSV file processed");
  canadaWriteStream.end();
  usaWriteStream.end();
}).on('error', (err) => {
  console.log("Error occured while reading the CSV file:", err);
});  