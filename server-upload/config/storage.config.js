const multer = require('multer');
const util = require('../utils/util');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        return cb(null, './public/site');
    },
    filename: (req, file, cb) => {
        let filename = '';

        const ext = file.originalname.split('.');
        if (ext.length > 1) {
            filename = `${file.fieldname}-${Date.now()}.${ext[ext.length - 1]}`;
        } else {
            filename = `${file.fieldname}-${Date.now()}`;
        }

        return cb(null, filename);
    },
});

module.exports.upload = multer({ storage });
