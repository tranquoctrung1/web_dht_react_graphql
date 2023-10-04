const express = require('express');
const router = express.Router();

const UploadMeterFileController = require('../controllers/uploadMeterFile.controller');
const StorageConfig = require('../config/storageMeterFile.config');

router.get('/', UploadMeterFileController.GetAll);

router.post(
    '/',
    StorageConfig.upload.single('file'),
    UploadMeterFileController.UploadFile,
);

router.delete('/', UploadMeterFileController.DeleteFile);

module.exports = router;
