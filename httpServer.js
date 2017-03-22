const http = require('http');
const fs = require('fs');


var server = http.createServer(function(req, res) {
    if (req.url === '/pets') {
        res.setHeader('Content-Type', 'text/html')
        fs.readFile('pets.json', function(err, data) {
            res.end(data)
        })
    } else if ([getIndex(req.url)] <= 1 && [getIndex(req.url)] >= 0) {
        res.setHeader('Content-Type', 'text/html')
        fs.readFile('pets.json', function(err, data) {
            const theObject = JSON.parse(data);
            var makeInToString = theObject[getIndex(req.url)]
            res.end(JSON.stringify(makeInToString))
        })
    } else if (getIndex(req.url) > 1 && getIndex(req.url) < 0){
        res.setHeader('Content-Type', 'text/html')
        res.end('Not Found');
        // console.log('wfwefw');

    }


})
// console.log(theObject[getIndex(req.url)]);
function getThemPets() {
    fs.readFile('pets.json', function(err, data) {
        res.end(JSON.parse(data))
    })
}

function getIndex(theUrl) {
    theUrl.split('')
    var index = parseInt(theUrl[6])
    return index
}







server.listen(3000)
