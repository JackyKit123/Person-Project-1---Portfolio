'use strict';
const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
app.use(express.static(path.join(path.resolve(),'public')));

app.get('/shortUrl', (req, res) => res.send(fs.readFileSync('shortUrl.json', { encoding: 'utf8' })));
app.get('/*', (req, res) => res.sendFile(path.join(path.resolve(),'public','index.html')));
// eslint-disable-next-line no-console
app.listen(8080, console.log(`Server started at ${Date().toString().match(/[0-2][0-9]:[0-5][0-9]:[0-5][0-9]/)[0]}.`));