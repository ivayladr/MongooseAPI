const Collection2 = require('../models/collection2');

exports.getAll = async (req, res) => {
    try {
        const items = await Collection2.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

