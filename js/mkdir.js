const fs = require('fs').promises;
const path = require('path');

async function createDirectory(dirName) {
    try {
        await fs.mkdir(path.join(__dirname, dirName));
        console.log(`Directory '${dirName}' created successfully.`);
    } catch (err) {
        if (err.code === 'EXIST') console.error('Directory already exists.');
        else console.error('Error creating directory:', err);
    }
}

module.exports = { createDirectory };