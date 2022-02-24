const StoreProduct = require('./../models/StoreProduct');
const { StatusCodes } = require('http-status-codes');

const createProduct = async (req, res) => {
    res.send('created product');
}

const getAllProducts = async (req, res) => {
    res.send('getting all product');
}

module.exports = {
    createProduct,
    getAllProducts
}