const { MongoClient } = require('mongodb');
require('dotenv').config();

module.exports.Connect = class Connect {
    constructor() {
        this.client = new MongoClient(process.env.MONGO_URL);
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
