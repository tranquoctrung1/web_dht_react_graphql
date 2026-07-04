// ConnectDB.js
const { MongoClient } = require('mongodb');
require('dotenv').config();

const config = {
    connectTimeoutMS: 60000,
    socketTimeoutMS: 60000,
    maxPoolSize: 50, // size of the connection pool
    maxIdleTimeMS: 300000, // close pooled connections idle for 5 minutes
};

class Connect {
    static clientPromise = null; // ✅ shared across the app
    static client = null;
    static db = null;

    // Ensure only one connection is ever created, even under concurrent calls
    async connectdb() {
        if (!Connect.clientPromise) {
            const client = new MongoClient(process.env.MONGO_URL, config);
            Connect.clientPromise = client
                .connect()
                .then(() => {
                    Connect.client = client;
                    Connect.db = client.db(process.env.DB);
                    return Connect.db;
                })
                .catch((err) => {
                    // reset so the next call can retry instead of reusing a dead client
                    Connect.clientPromise = null;
                    throw err;
                });
        }
        return Connect.clientPromise;
    }

    // Get a collection using the shared connection
    async connect(collectionName) {
        const db = await this.connectdb();
        return db.collection(collectionName);
    }

    // Only call when the whole app is shutting down
    async disconnect() {
        if (Connect.client) {
            await Connect.client.close();
            Connect.client = null;
            Connect.db = null;
            Connect.clientPromise = null;
        }
    }
}

module.exports.Connect = Connect;
