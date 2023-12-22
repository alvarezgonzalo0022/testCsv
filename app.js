const fs = require('fs');
const { Parser } = require('json2csv');


// Define the fields from your JSON you want to include in the CSV
const fields = [
    'LanguageCode',
    'B2BSKUREF',
    'StyleCode',
    'ColorCode',
    'SizeCodeNavision',
    'SizeCode',
    'StyleName',
    'Color',
    'ColorGroup',
    'Type',
    'Category',
    'Gender',
    'Stock',
    'Fit',
    'Neckline',
    'Sleeve',
    'ShortDescription',
    'LongDescription',
    'ShortNote',
    'LongNote',
    'Bleaching',
    'Washing',
    'Cleaning',
    'Drying',
    'Ironing',
    'CompositionList',
    'ConstructionList',
    'FinishList',
    'SundryList',
    'Gauge',
    'Weight',
    'GOTS',
    'OCS100',
    'OCSBlended',
    'Ecotex',
    'Fairwear',
    'CarbonNeutral',
    'FSC',
    'REACH',
    'WeigthPerUnit',
    'PiecesPerBox',
    'HalfChest',
    'BodyLength',
    'SleeveLength',
    'Width',
    'Length',
    'StrapLength',
    'Waist',
    'Tight',
    'TotalLegLength',
    'HSCode',
    'K3EUR',
    'K15EUR',
    'K30EUR',
    'K50EUR',
    'K100EUR',
    'Price<10 EUR',
    'Price>10 EUR',
    'Price>50 EUR',
    'Price>100 EUR',
    'Price>250 EUR',
    'Price>500 EUR',
    'Price>1000 EUR',
    'K3GBP',
    'K15GBP',
    'K30GBP',
    'K50GBP',
    'K100GBP',
    'Price<10 GBP',
    'Price>10 GBP',
    'Price>50 GBP',
    'Price>100 GBP',
    'Price>250 GBP',
    'Price>500 GBP',
    'Price>1000 GBP',
    'SKU_Start_Date',
    'Published',
    'PiecesPerPolybag',
    'FitID',
    'GenderID',
    'CategoryID',
    'TypeID',
    'NecklineID',
    'SleeveID',
    'SequenceStyle',
    'NewStyle',
    'NewProduct',
    'NewItem',
    'NewColor',
    'NewSize',
    'ColorSequence',
    'ColorGroupSequence',
    'SizeSequence',
    'StylePublished',
    'MainPicture',
    'StyleSegment',
    'ProductLifecycle',
    'CountryOfOrigin',
    'CategoryCode',
    'TypeCode',
    'GRS',
    'VEGAN',
    'GOTS85',
    'Thickness',
    'ShellWeight',
    'PaddingComposition',
    'PaddingConstruction',
    'PaddingFinishing',
    'PaddingWeight',
    'LiningComposition',
    'LiningConstruction',
    'LiningFinishing',
    'LiningWeight',
    'Layer4Name',
    'Layer4Composition',
    'Layer4Construction',
    'Layer4Finishing',
    'Layer4Weight',
    'Layer5Name',
    'Layer5Composition',
    'Layer5Construction',
    'Layer5Finishing',
    'Layer5Weight',
    'StyleNotice',
    'WashInstructions',
    'WashInstructionsAdditions',
    'Specifications'
  ];
  
  const opts = { fields };

  // Create a parser instance
  const parser = new Parser(opts);
  
  // Input and output file paths
  const inputPath = 'response.json';
  const outputPath = 'output.csv';
  
  // Read the file
  fs.readFile(inputPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }
  
    // Parse JSON data
    let jsonData = JSON.parse(data);
  
    // Handle JSON structure - unwrap the result array if it's wrapped as a string
    if (typeof jsonData.result === 'string') {
      jsonData = JSON.parse(jsonData.result);
    }
  
    // Convert JSON to CSV
    try {
      const csv = parser.parse(jsonData);
      // Write the CSV to a file
      fs.writeFile(outputPath, csv, (err) => {
        if (err) {
          console.error('Error writing the CSV:', err);
        } else {
          console.log('CSV file was created successfully');
        }
      });
    } catch (err) {
      console.error('Error parsing JSON to CSV:', err);
    }
  });
