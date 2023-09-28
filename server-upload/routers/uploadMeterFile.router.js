const express = require('express');
const router = express.Router();

const UploadMeterFileController = require('../controllers/uploadMeterFile.controller');
const StorageConfig = require('../config/storageMeterFile.config');

router.post(
    '/',
    StorageConfig.upload.single('file'),
    UploadMeterFileController.UploadFile,
);

module.exports = router;
