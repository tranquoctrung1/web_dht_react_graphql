const express = require('express');
const router = express.Router();

const UploadFileController = require('../controllers/uploadSiteFile.controller');
const StorageConfig = require('../config/storage.config');

router.post(
    '/',
    StorageConfig.upload.single('file'),
    UploadFileController.UploadFile,
);

module.exports = router;
