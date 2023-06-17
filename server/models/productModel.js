const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;


const productSchema = new mongoose.Schema({

    nameProduct: {
        type: String,
        required: [true, 'Please add a product Name'],
    },

    price: {
        type: Number,
        required: [true, 'Product must have a price'],
    },

    image: {
        type: String,
        required: true,

    },

    imageId: {
        type: String,
        required: true,

    },

    categoryId: {
        type: String,
        required: [true, 'Product must belong to a category'],
    },




}, { timestamps: true });






module.exports = mongoose.model("Product", productSchema);