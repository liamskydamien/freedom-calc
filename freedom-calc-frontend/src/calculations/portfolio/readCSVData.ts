import csv from 'csv-parser';
import fs from 'fs';

export function readCovariances() {
  const covarianceData: number[][] = [];
  fs.createReadStream('covariances.csv')
    .pipe(csv())
    .on('data', (data) => {
      covarianceData.push(data)
    })
    .on('end', () => {
      console.log('CSV file successfully processed');
    });
  return covarianceData;
}
