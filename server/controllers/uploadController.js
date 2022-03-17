const { StatusCodes } = require('http-status-codes');
const CustomError = require('./../errors');
const upload = require("./upload");

const singleUpload = upload.single('image');

const uploadProductImage = async (req, res) => {
    singleUpload(req, res, function(err, some){
        if(err){
            return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({errors: [{title: 'Image Upload Error', detail: err.message}] })
        }

        return res.status(StatusCodes.OK).json({'imageURL': req.file.location});
    })
}

module.exports = {
    uploadProductImage
}