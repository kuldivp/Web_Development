const mongoose = require('mongoose');
mongoose.set("strictQuery",true);

async function connect_to_mongodb(url) {
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = {
    connect_to_mongodb,
};
