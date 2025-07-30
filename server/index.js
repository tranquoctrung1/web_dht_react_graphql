const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@as-integrations/express5');
const {
    ApolloServerPluginCacheControl,
} = require('@apollo/server/plugin/cacheControl');
const {
    ApolloServerPluginDrainHttpServer,
} = require('@apollo/server/plugin/drainHttpServer');
const cors = require('cors');
const express = require('express');
const http = require('http');
require('dotenv').config();

const typeDefs = require('./schema/typeDefs');
const resolvers = require('./schema/resolvers');

const app = express();
const port = process.env.PORT || 3001;
const httpServer = http.createServer(app);

// ✅ Đặt middleware TOÀN CỤC NGAY SAU khi khởi tạo app
app.use(cors());
app.use(express.json());

const startServer = async () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [
            ApolloServerPluginDrainHttpServer({ httpServer }),
            ApolloServerPluginCacheControl({
                defaultMaxAge: 5,
                calculateHttpHeaders: false,
            }),
        ],
    });

    await server.start();

    // ✅ Middleware Apollo sau cùng
    app.use(
        '/',
        expressMiddleware(server, {
            context: async ({ req }) => ({ token: req.headers.token }),
        }),
    );
};

// Khởi chạy
startServer();

httpServer.listen(port, () => {
    console.log(`🚀 Server ready at http://localhost:${port}/`);
});
