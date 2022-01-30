import { GraphQLClient, gql } from "graphql-request";

const endpoint = 'http://localhost:8888/.netlify/functions/graphql';
const graphQLClient = new GraphQLClient(endpoint);

export const getScores = async () => {
    const query = gql`
    query {
        players(limit: 100) {
            id
            name
            score
          }
    }
`;

return await graphQLClient.request(query);
};

export const sendData = async (formData) => {
    const mutation = gql`
        mutation (
            $name: String,
            $score: Int
        ) {
            writeData (
                name: $name,
                score: $score
            ) {
                name
                score
            }
        }
    `;

    return await graphQLClient.request(mutation, formData);
};