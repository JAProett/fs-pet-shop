const fs = require('fs');

if (process.argv.length === 2) {
    console.error;
    console.log('Usage: node pets.js [read | create | update | destroy]');
}
if (process.argv[2] === 'read') {
    fs.readFile('pets.json', function (err, data){
        const petData = JSON.parse(data);
        } else if (process.argv[3]) {
            console.log(petData);
        } else
}
