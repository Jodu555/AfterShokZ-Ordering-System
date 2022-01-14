const fs = require('fs');
const path = require('path')

const AFTERSHOKZ_DIRECTORY = 'E://';
const filesPath = 'D://Allgemein//Ich//Hobbys//Musik//Xtrainerz';
const exclude = ['OLD'];

const dirs = fs.readdirSync(filesPath).sort();

dirs.forEach(dir => {
    if (!exclude.includes(dir)) {
        const name = dir.split('-')[1];
        const files = fs.readdirSync(path.join(filesPath, dir)).map(e => {
            return { path: path.join(filesPath, dir, e), name: e };
        });
        console.log(files);
        files.forEach(file => {
            const dest = path.join(AFTERSHOKZ_DIRECTORY, name, file.name)
            console.log(file.path, dest);
            // fs.copyFileSync()
        });
    }
});
