const fs = require('fs');
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
            // busboy decodes multipart headers as latin1 by default, but
            // browsers send the filename as raw UTF-8 bytes — re-interpret
            // to recover Vietnamese diacritics instead of storing mojibake.
            FileName: Buffer.from(req.file.originalname, 'latin1').toString(
                'utf8',
            ),
            MIMEType: req.file.mimetype,
            Size: req.file.size,
            Path: req.file.path,
            UploadDate: new Date(Date.now()),
        };

        res.status(200).json({
            message: await SiteFileModel.Insert(fileUpload),
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

        const deleted = await SiteFileModel.Delete(id);

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
