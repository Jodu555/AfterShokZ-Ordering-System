const fs = require('fs');

const AFTERSHOKZ_DIRECTORY = 'E://';
const filesPath = 'D://Allgemein//Ich//Hobbys//Musik//Xtrainerz';
const exclude = ['OLD'];

const dirs = fs.readdirSync(filesPath).sort();

dirs.forEach(dir => {
    const name = dir.split('-')[1];
    console.log(name);
});
