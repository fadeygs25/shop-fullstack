const Product = require("../models/productModel");
const Category = require("../models/categoryModel");
const cloudinary = require('../config/cloudinary');
const colors = require('colors');



exports.createProduct = async (req, res, next) => {

    const { nameProduct, price, image, categoryId } = req.body;


    try {
        const result = await cloudinary.uploader.upload(image, {
            folder: "products",
            // width: 300,
            // crop: "scale"
        })
        const product = await Product.create({
            nameProduct,
            price,
            image: result.secure_url,
            imageId: result.public_id,
            categoryId
        });
        res.json(product)

    } catch (err) {
        console.error(`ERROR: ${err.message}`.bgRed.underline.bold);
        res.status(500).send('Server Error');
    }

}

exports.displayProduct = async (req, res, next) => {


    try {
        const products = await Product.find();
        res.json(products)
    } catch (err) {
        console.error(`ERROR: ${err.message}`.bgRed.underline.bold);
        res.status(500).send('Server Error');
    }

}

exports.countProducts = async (req, res, next) => {
    try {
        const countProducts = await Product.countDocuments();
        res.json(countProducts);
    } catch (err) {
        console.error(`ERROR: ${err.message}`.bgRed.underline.bold);
        res.status(500).send('Server Error');
    }

}

exports.findProduct = async (req, res, next) => {

    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch (err) {
        console.error(`ERROR: ${err.message}`.bgRed.underline.bold);
        res.status(500).send('Server Error');
    }

}


exports.searchProduct = async (req, res, next) => {

    try {
        const products = await Product.find({ name: req.params.id });
        res.status(201).json({
            success: true,
            products
        })
    } catch (err) {
        console.error(`ERROR: ${err.message}`.bgRed.underline.bold);
        res.status(500).send('Server Error');
    }

}

// Update product image in Cloudinary and product data in MongoDB.
exports.updateProduct = async (req, res, next) => {
    try {
        //current product
        const currentProduct = await Product.findById(req.params.id);
        const form = req.body.form
        //build the data object
        const data = {
            name: form.name,
            description: form.description,
            price: form.price,
            category: form.category,
            image: form.image
        }
        //modify image conditionnally
        if (req.body.image !== '') {
            const ImgId = currentProduct.imageId;
            if (ImgId) {
                await cloudinary.uploader.destroy(ImgId);
            }

            const newImage = await cloudinary.uploader.upload(req.body.image, {
                folder: "products",
                width: 1000,
                crop: "scale"
            });

            data.image = newImage.secure_url;
            data.imageId = newImage.public_id
        }

        const productUpdate = await Product.findOneAndUpdate(req.params.id, data, { new: true })

        res.status(200).json({
            success: true,
            productUpdate
        })


    } catch (err) {
        console.error(`ERROR: ${err.message}`.bgRed.underline.bold);
        res.status(500).send('Server Error');
    }
}



// delete product and product image in cloudinary
exports.deleteProduct = async (req, res, next) => {

    try {
        const product = await Product.findById(req.params.id);
        //retrieve current image ID
        const imgId = product.imageId;
        if (imgId) {
            await cloudinary.uploader.destroy(imgId);
        }

        const rmProduct = await Product.findByIdAndDelete(req.params.id);

        res.json({
            productId: req.params.id,
            toasts: [{ message: 'Product deleted', type: 'success' }]
        });

    } catch (err) {
        console.error(`ERROR: ${err.message}`.bgRed.underline.bold);
        res.status(500).send('Server Error');
    }

}





// display category
exports.productCategory = async (req, res, next) => {

    try {
        const cat = await Product.find().populate('category', 'name').distinct('category');
        res.status(201).json({
            success: true,
            cat
        })

    } catch (error) {
        console.log(error);
        next(error);
    }

}




