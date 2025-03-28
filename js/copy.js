const fs = require('fs').promises;
const path = require('path');

async function copyFile(srcPattern, dest) {
    try {
        const files = await fs.readdir(__dirname);
        const regex = new RegExp(`^${srcPattern.replace(/\*/g, '.*').replace(/\?/g, '.')}$`);
        for (const file of files) {
            if (regex.test(file)) {
                await fs.copyFile(path.join(__dirname, file), path.join(dest, file));
                console.log(`File '${file}' copied to '${dest}'`);
            }
        }
    } catch (err) {
        console.error('Error copying files:', err);
    }
}

module.exports = { copyFile };