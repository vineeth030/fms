const mongoose = require('mongoose');

const connectDatabase = async () => {

    try {
        const connect = await mongoose.connect(process.env.DATABASE_CONNECTION_STRING); 
        console.log('Database Connected', connect.connection.host);
    } catch (error) {

        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDatabase;