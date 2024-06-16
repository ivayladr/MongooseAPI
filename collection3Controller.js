const Collection3 = require('../models/collection3');

exports.getAll = async (req, res) => {
    try {
        const items = await Collection3.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
