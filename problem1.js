import fs from 'fs';

export function createdir() {
    fs.mkdir('folder', { recursive: true }, (err) => {
        if (err) {
            console.error('Error in creating directory:', err);
        } else {
            console.log('Directory is created');
        }
    });
}

export function createfile1(callback) {
    fs.writeFile('folder/sai1.json', 'This is sai1.json file', (err) => {
        if (err) {
            console.error('Facing error while creating sai1.json file:', err);
        } else {
            console.log('sai1.json file created successfully');
            if (callback) callback();
        }
    });
}

export function createfile2(callback) {
    fs.writeFile('folder/sai2.json', 'This is sai2.json file', (err) => {
        if (err) {
            console.error('Facing error while creating sai2.json file:', err);
        } else {
            console.log('sai2.json file created successfully');
            if (callback) callback();
        }
    });
}

export function deletesai1() {
    fs.unlink('folder/sai1.json', (err) => {
        if (err) {
            console.error('Error deleting sai1.json file:', err);
        } else {
            console.log('sai1.json file deleted successfully');
        }
    });
}

export function deletesai2() {
    fs.unlink('folder/sai2.json', (err) => {
        if (err) {
            console.error('Error deleting sai2.json file:', err);
        } else {
            console.log('sai2.json file deleted successfully');
        }
    });
}
