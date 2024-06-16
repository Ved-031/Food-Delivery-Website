import userModel from '../models/userModel.js'

// Add items to user cart
const addToCart = async (req, res) => {
    try {
        let user = await userModel.findById(req.body.userId);
        let cart = await user.cart;
        if(!cart[req.body.itemId]){
            cart[req.body.itemId] = 1;
        }else{
            cart[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, {cart});
        res.json({success: true, message: "Added to Cart"})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    }
}

// Remove items from user cart
const removeFromCart = async (req, res) => {
    try {
        const user = await userModel.findById(req.body.userId);
        const cart = await user.cart;
        if(cart[req.body.itemId]>0){
            cart[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, {cart});
        res.json({success: true, message: "Removed from Cart"})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    }
}

// Fetch user cart data
const getCartData = async (req, res) => {
    try {
        const user = await userModel.findById(req.body.userId);
        const cart = await user.cart;
        res.json({success: true, cart})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    }
}

export { addToCart, removeFromCart, getCartData }