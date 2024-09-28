import mongoose from "mongoose";

const connect_db = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to database: ${conn.connection.name}`);
    } catch (error) {
        console.error('Error connecting to database:', error);
        throw error;
    }
};

export default connect_db;
