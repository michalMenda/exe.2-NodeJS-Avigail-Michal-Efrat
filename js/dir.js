const fs = require('fs').promises;
const path = require('path');

async function listDirectory() {
    try {
        const files = await fs.readdir(__dirname);
        for (const file of files) {
            const stats = await fs.stat(path.join(__dirname, file));
            console.log(`[${stats.isDirectory() ? 'Dir' : 'File'}] ${file}`);
        }
    } catch (err) {
        console.error('Error reading directory:', err);
    }
}

module.exports = { listDirectory };