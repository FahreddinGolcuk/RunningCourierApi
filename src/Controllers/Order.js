import Order from '../Models/Order.js';
import Category from '../Models/Category.js';

export const createOrder = async (req, res) => {
    try {
        const newOrder = new Order({...req.body,
            date: String(new Date()
                .toISOString()
                .replace(/T/, ' ')
                .replace(/\..+/, '')), userId: req.headers.userid});
        await newOrder.save();
        res.status(200).json({message: 'Success', status: true});
    } catch (e) {
        res.status(400).json({message: e.message});
    }
};

export const getOrderPrice = async (req,res) => {
    const { products } = req.body
    var price = 0
    try {
        const categories = await Category.find();
        products.forEach(product => {
            categories.forEach((category) => {
                let finded = category['products'].find( item => item.id === product.productId )
                if(finded) {
                    price += (finded.price * product.quantity)
                }
            });
        })
        res.status(200).json({status: true, price: price})
    } catch(e) {
        res.status(400).json({message: e.message, status: false})
    }
}

export const getOrderHistory = async (req, res) => {
    try {
        const orders = await Order.find({userId: req.headers.userid});
        res.status(200).json(orders);
    } catch (e) {
        res.status(400).json({message: e.message});
    }
};
