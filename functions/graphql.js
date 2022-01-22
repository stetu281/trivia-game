const { ApolloServer, gql } = require("apollo-server-lambda");
const mysql = require("mysql2/promise");

const typeDefs = gql`
    type Query {
        player(id: ID!): Player
        players(limit: Int = 50): [Player!]
    }
    type Player {
        id: ID!
        name: String!
        score: Int!
    }
`;

const resolvers = {
    Query: {
        players: async (obj, args, context) => {
            const [players] = await context.db.query(
                `SELECT * FROM highscores LIMIT ?`,
                [args.limit]
            );
            return players;
        },

        player: async (obj, args, context) => {
            const [players] = await context.db.query(
                `SELECT * FROM highscores WHERE id = ?`,
                [args.id]
            );
            return estates[0];
        }
    },
};

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        db: connection
    },
    playground: true,
    introspection: true,
});

exports.handler = server.createHandler();