const multer = require('multer');
const multerS3 = require('multer-s3');

const aws = require('aws-sdk');

aws.config.update({
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    accessKeyId: process.env.ACCESS_KEY_ID,
    region: 'us-east-1'
})

const s3 = new aws.S3();

const upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: 'node-react-images',
      acl: 'public-read',
      metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) {
        cb(null, Date.now().toString()+"_"+file.originalname)
      }
    })
  })
  
  module.exports = upload;