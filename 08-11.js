fs = require('fs');
global.fetch = require("node-fetch");
fetch('http://localhost:3002/xml', {
        method: 'POST',
        headers: {'Content-Type': 'application/xml; charset=utf-8'},
        body: fs.readFileSync('./static/xml.txt')
    }
)
