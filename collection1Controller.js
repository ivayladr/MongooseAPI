const Collection1 = require('../models/collection1');

exports.getAll = async (req, res) => {
    try {
        const items = await Collection1.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

