const fs = require('fs');

const AFTERSHOKZ_DIRECTORY = 'E://';
const filesPath = 'D:\Allgemein\Ich\Hobbys\Musik\Xtrainerz';

const dirs = fs.readdirSync(filesPath);
console.log(dirs);
