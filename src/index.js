const fs = require('fs');
const path = require('path')

const { CommandManager } = require('@jodu555/commandmanager');
//                                              Pass here the standard pipe you want to use
const commandManager = CommandManager.createCommandManager(process.stdin, process.stdout);

const AFTERSHOKZ_DIRECTORY = 'I://Test';
const filesPath = 'D://Allgemein//Ich//Hobbys//Musik//Xtrainerz';
const exclude = ['OLD'];

const dirs = fs.readdirSync(filesPath).sort();

console.log('Started to copy files');
dirs.forEach(dir => {
    if (!exclude.includes(dir)) {
        const name = dir.split('-')[1];
        const files = fs.readdirSync(path.join(filesPath, dir)).map(e => {
            return { path: path.join(filesPath, dir, e), name: e };
        });
        fs.mkdirSync(path.join(AFTERSHOKZ_DIRECTORY, name));
        files.forEach((file, i) => {
            const dest = path.join(AFTERSHOKZ_DIRECTORY, name, file.name)
            fs.copyFileSync(file.path, dest)
            commandManager.getWriter().deepSameLineClear(`Copied: ${file.name} from ${name}   ${i}/${files.length}`);
        });
        commandManager.getWriter().end();
    }
});
