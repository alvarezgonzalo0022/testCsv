import jsonData from './response.json' assert { type: 'json' };
import fs from 'fs';

function jsonToCsv(json, delimiter = ',') {
  const array = JSON.parse(json.result);

  if (array.length === 0) return '';

  const headers = Object.keys(array[0]);
  const csvLines = [headers.join(delimiter)];

  for (const obj of array) {
    const row = headers.map(fieldName => {
      let field = obj[fieldName] == null ? '' : String(obj[fieldName]);
      field = field.replace(/"/g, '""');
      return `"${field}"`;
    }).join(delimiter);
    csvLines.push(row);
  }

  return csvLines.join('\r\n');
}

function saveCsv(csv, filename) {
  fs.writeFile(filename, csv, 'utf8', err => {
    if (err) {
      console.error('There was an error writing the CSV file:', err);
    } else {
      console.log(`${filename} was saved successfully in UTF-8 encoding.`);
    }
  });
}

const csvData = jsonToCsv(jsonData, ';');
saveCsv(csvData, 'products.csv');
