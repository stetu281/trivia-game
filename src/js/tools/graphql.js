import { GraphQLClient, gql } from "graphql-request";

const endpoint = 'http://localhost:8888/api/graphql';
const graphQLClient = new GraphQLClient(endpoint);

export const getScores = async () => {
    const query = gql`
    {
        players {
            id
            name
            score
          }
    }
`;

return await graphQLClient.request(query);
};