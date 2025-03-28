const fs = require('fs').promises;
const path = require('path');

async function copyFileContent(src, dest, append = false) {
    try {
        const content = await fs.readFile(src, 'utf8');
        const flag = append ? 'a' : 'w';
        await fs.writeFile(dest, content, { flag });
        console.log(`Content copied from '${src}' to '${dest}'`);
    } catch (err) {
        console.error('Error copying file content:', err);
    }
}

module.exports = { copyFileContent };