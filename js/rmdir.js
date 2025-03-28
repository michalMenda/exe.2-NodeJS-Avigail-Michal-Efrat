const fs = require('fs').promises;
const path = require('path');

async function removeDirectory(dirName) {
    try {
        await fs.rmdir(path.join(__dirname, dirName));
        console.log(`Directory '${dirName}' removed successfully.`);
    } catch (err) {
        console.error('Error removing directory:', err);
    }
}

module.exports = { removeDirectory };