const SiteFileModel = require('../models/SiteFile.model');

module.exports.UploadFile = async (req, res) => {
    try {
        const fileUpload = {
            SiteId: req.body.siteId,
            FileName: req.file.filename,
            MIMEType: req.file.mimetype,
            Size: req.file.size,
            Path: req.file.path,
            UploadDate: new Date(Date.now()),
        };

        res.status(200).json({
            message: await SiteFileModel.Insert(fileUpload),
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err });
    }
};
