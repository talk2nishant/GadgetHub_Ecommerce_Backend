const express = require('express')
const router = express.Router()
const productModel = require('./models/productModel')



router.get('/:id', async (req, res) => {
    try {
        return res.status(201).json({
            success:true,
            product: product
        });
    } catch (error) {
        return res.status(500).json({
            success:false,
            message: error.message
        })
    }
});


router.get('/', async (req, res) => {
  try {
        return res.status(201).json({ 
            success:true,
            product: products
        });
    } catch (error) {
        return res.status(500).json({
            success:false,
            message: error.message
        })
    }
});



router.post('/', async(req, res) => {
  try {
    const product = new productModel(req.body)
    await product.save();
    return res.status(201).json({
        success : true,
        product,
        message : 'Product saved successfuly'
    })
  } catch (error) {
    return res.status(500).json({
        success : false,
        message : error.message
    })
  }
})


router.put('/:id', async(req, res) => {
  try {
    await productModel.findByIdAndUpdate(res.params.id,req.body);
    return res.status(201).json({
        success : true, 
        message : "Product was updated"
    })
  } catch (error) {
    return res.status(500).json({
        success : false,
        message : error.message
    })
  }
})

router.delete('/:id', async(req, res) => {
  try {
    await productModel.findByIdAndDelete(req.params.id);
    return res.status(201).json({
        success : true,
        message : "Product was removed"
    })
  } catch (error) {
    return res.status(500).json({
        success : false,
        message : error.message
    })
  }
})

module.exports = router;