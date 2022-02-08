/**
 * On this module you should write your answer to question #2.
 * This file would be executed with the following command:
 * $ node scritp.js BrowsingEvents.csv
 */

const args = process.argv.slice(-1);
console.log(`Running question #2 with args ${args}`)


const fs = require('fs');
const parser = require('csv-parser');
const fastcsv = require('fast-csv');

const ws = fs.createWriteStream('output.csv');
const rs = fs.createReadStream('BrowsingEvents.csv')
const data = [];
const id = '765874';

rs
    .pipe(parser({
        separator: ',',
    }))
    .on('data', row => {
        data.push(row)

    })
    .on('error', error => console.error(error))
    .on('end', () => {
        var filterData = [];
        filterData = data.filter(x => x.entityId == id)

        var clicks = filterData.filter(x => x.eventType == 'click').length;
        var impression = filterData.filter(x => x.eventType == 'impression').length;
        const output = [
            {
                productId: id,
                clicks: clicks,
                impressions: impression,
                ctr: clicks / impression
            }
        ];

        fastcsv
            .write(output, { headers: 'true' })
            .pipe(ws)
            .on('error', error => console.error(error));

        console.log("Data processed successfully!")
    });

