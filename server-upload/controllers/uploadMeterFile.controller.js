const MeterFileModel = require('../models/MeterFile.model');

module.exports.UploadFile = async (req, res) => {
    try {
        const fileUpload = {
            Serial: req.body.serial,
            FileName: req.file.filename,
            MIMEType: req.file.mimetype,
            Size: req.file.size,
            Path: req.file.path,
            UploadDate: new Date(Date.now()),
        };

        res.status(200).json({
            message: await MeterFileModel.Insert(fileUpload),
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err });
    }
};
