require('dotenv').config();

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
require('express-async-errors');

const cors = require('./middlewares/cors');

const UploadSiteFileRouter = require('./routers/uploadSiteFile.router');
const UploadMeterFileRouter = require('./routers/uploadMeterFile.router');

// A rejection/exception that escapes express-async-errors' handling would
// otherwise crash the process silently, with no supervisor to restart it —
// permanent downtime until manual restart.
process.on('unhandledRejection', (reason) => {
    console.error('Unhandled promise rejection:', reason);
});
process.on('uncaughtException', (err) => {
    console.error('Uncaught exception:', err);
});

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

// Sockets left half-closed by a proxy/NAT never get force-closed without
// these, and slowly accumulate over long uptimes until the server stops
// accepting new connections. keepAliveTimeout must stay below headersTimeout.
server.keepAliveTimeout = 65000;
server.headersTimeout = 66000;

server.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
