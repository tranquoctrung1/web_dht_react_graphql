const { MongoClient } = require('mongodb');
require('dotenv').config();

const config = {
    connectTimeoutMS: 30000,
    socketTimeoutMS: 30000,
    useUnifiedTopology: true,
};

module.exports.Connect = class Connect {
    constructor() {
        this.client = new MongoClient(process.env.MONGO_URL, config);
        this.db = this.client.db(process.env.DB);
    }

    async connectdb() {
        return await this.client.connect();
    }

    async connect(collection) {
        await this.client.connect();

        return this.db.collection(collection);
    }

    disconnect() {
        this.client.close();
    }
};
