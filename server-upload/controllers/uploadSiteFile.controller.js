const SiteFileModel = require('../models/SiteFile.model');

module.exports.GetAll = async (req, res) => {
    try {
        res.status(200).json({ message: await SiteFileModel.GetAll() });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err });
    }
};

module.exports.UploadFile = async (req, res) => {
    try {
        const fileUpload = {
            SiteId: req.body.siteId,
            FileName: req.file.originalname,
            MIMEType: req.file.mimetype,
            Size: req.file.size,
            Path: req.file.path,
            UploadDate: new Date(Date.now()),
        };

        res.status(200).json({
            message: await SiteFileModel.Insert(fileUpload),
        });
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

module.exports.DeleteFile = async (req, res) => {
    try {
        const { id } = req.query;

        res.status(200).json({ message: await SiteFileModel.Delete(id) });
    } catch (err) {
        res.status(500).json({ message: err });
    }
};
