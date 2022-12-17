const { gql } = require('graphql-tag');

module.exports = gql`
    type Test {
        consumerName: String
    }

    type Query {
        test: Test
    }
`;
