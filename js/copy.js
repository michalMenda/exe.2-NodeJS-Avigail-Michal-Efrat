const fs = require('fs').promises;
const path = require('path');

async function copyFile(srcPattern, dest) {
    try {
        const files = await fs.readdir(__dirname);
        const regex = new RegExp(`^${srcPattern.replace(/\*/g, '.*').replace(/\?/g, '.')}$`);       
        const matchingFiles = files.filter(file => regex.test(file));
        if (matchingFiles.length === 0) {
            console.log("No matching files found.");
            return;
        }
        await fs.mkdir(dest, { recursive: true });   
        for (const file of matchingFiles) {
            const sourcePath = path.join(__dirname, file);
            const destinationPath = path.join(dest, file);
            await fs.copyFile(sourcePath, destinationPath);
            console.log(`File '${file}' copied to '${dest}'`);
        }
    } catch (err) {
        console.error('Error copying files:', err);
    }
}

module.exports = { copyFile };