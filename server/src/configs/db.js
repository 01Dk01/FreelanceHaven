const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connect = () => {
    return mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
            console.log('MongoDB connected successfully.');
        })
        .catch((error) => {
            console.error('MongoDB connection error:', error);
            throw error;
        });
};

module.exports = connect;