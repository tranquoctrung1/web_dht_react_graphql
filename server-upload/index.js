require('dotenv').config();

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
require('express-async-errors');

const cors = require('./middlewares/cors');

const UploadSiteFileRouter = require('./routers/uploadSiteFile.router');
const UploadMeterFileRouter = require('./routers/uploadMeterFile.router');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// use cors
app.use(cors);

// use static file
app.use('/api/public', express.static(path.join(__dirname, '/public')));

// use api
app.use('/api/siteFile/upload', UploadSiteFileRouter);
app.use('/api/meterFile/upload', UploadMeterFileRouter);

// other error
app.use(function (err, req, res, next) {
    console.log(err);
    res.status(500).render('500');
});

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
