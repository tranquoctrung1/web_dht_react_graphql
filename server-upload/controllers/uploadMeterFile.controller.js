const fs = require('fs');
const MeterFileModel = require('../models/MeterFile.model');

module.exports.GetAll = async (req, res) => {
    try {
        res.status(200).json({ message: await MeterFileModel.GetAll() });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err });
    }
};

module.exports.UploadFile = async (req, res) => {
    try {
        const fileUpload = {
            Serial: req.body.serial,
            FileName: req.file.originalname,
            MIMEType: req.file.mimetype,
            Size: req.file.size,
            Path: req.file.path,
            UploadDate: new Date(Date.now()),
        };

        res.status(200).json({
            message: await MeterFileModel.Insert(fileUpload),
        });
    } catch (err) {
        // multer already wrote the file to disk before this handler ran —
        // if the DB insert failed, remove it so it doesn't orphan forever.
        if (req.file && req.file.path) {
            fs.unlink(req.file.path, () => {});
        }
        res.status(500).json({ message: err });
    }
};

module.exports.DeleteFile = async (req, res) => {
    try {
        const { id } = req.query;

        const deleted = await MeterFileModel.Delete(id);

        if (deleted !== null && deleted !== undefined && deleted.Path) {
            fs.unlink(deleted.Path, (err) => {
                if (err) {
                    console.log(err);
                }
            });
        }

        res.status(200).json({ message: deleted });
    } catch (err) {
        res.status(500).json({ message: err });
    }
};
