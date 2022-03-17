const StoreProduct = require('./../models/StoreProduct');
const { StatusCodes } = require('http-status-codes');

const createProduct = async (req, res) => {
    const project = await StoreProduct.create(req.body);
    return res.status(StatusCodes.CREATED).json({ project })
}

const getAllProducts = async (req, res) => {
    const allProjects = await StoreProduct.find({});
    return res.status(StatusCodes.OK).json({ count:allProjects.length, projects:allProjects })
}

module.exports = {
    createProduct,
    getAllProducts
}