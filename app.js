const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const collection1Routes = require('./routes/collection1Routes');
const collection2Routes = require('./routes/collection2Routes');
const collection3Routes = require('./routes/collection3Routes');

app.use('/api/collection1', collection1Routes);
app.use('/api/collection2', collection2Routes);
app.use('/api/collection3', collection3Routes);

mongoose.connect('mongodb://localhost:27017/yourdbname', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch((error) => {
    console.error('Database connection error:', error);
});
