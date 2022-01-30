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
    type Mutation {
        writeData (
            name: String
            score: Int
        ):Player!
    }
`;

const resolvers = {
    Query: {
        players: async (obj, args, context) => {
            const [players] = await context.db.query(
                `SELECT * FROM highscores 
                ORDER BY score DESC
                LIMIT ?`,
                [args.limit]
            );
            return players;
        },

        player: async (obj, args, context) => {
            const [players] = await context.db.query(
                `SELECT * FROM highscores WHERE id = ?`,
                [args.id]
            );
            return players[0];
        }
    },
    Mutation: {
        writeData: async (obj, args, context) => {
            const [result] = await context.db.execute(`
                INSERT INTO highscores (name, score) VALUES (?, ?)
            `, [args.name, args.score]);

            const newScore = result.insertId;

            const [scores] = await context.db.query(
                `SELECT * FROM highscores WHERE id = ?`, [newScore]
            )
            return scores[0];
        }
    }
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

exports.handler = server.createHandler({
    cors: {
        origin: '*',
        credentials: true,
    },
});