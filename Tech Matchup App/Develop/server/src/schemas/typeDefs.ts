const { gql } = require('graphql');

const typeDefs = gql`
  type Technology {
    id: ID!
    name: String!
  }

  type Matchup {
    id: ID!
    tech1: Technology!
    tech2: Technology!
    votes1: Int!
    votes2: Int!
  }

  type Query {
    matchups: [Matchup]
    matchup(id: ID!): Matchup
    technologies: [Technology]
  }

  type Mutation {
    createMatchup(tech1: ID!, tech2: ID!): Matchup
    vote(matchupId: ID!, tech: ID!): Matchup
  }
`;

export default typeDefs; 