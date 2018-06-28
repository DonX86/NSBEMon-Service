const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLList,
  GraphQLString,
  GraphQLID,
} = require('graphql');

module.exports.MemberType = new GraphQLObjectType({
  name: 'MemberType',
  description: 'An object representing a single user',
  fields: () => {
    const { TrainingType } = require('../training/trainingType');
    const { TeamType } = require('../team/teamType');
    return ({
      email: {
        type: new GraphQLNonNull(GraphQLID),
      },
      isLeader: {
        type: GraphQLBoolean,
      },
      isAdmin: {
        type: GraphQLBoolean,
      },
      firstName: {
        type: GraphQLString,
      },
      lastName: {
        type: GraphQLString,
      },
      team: {
        type: TeamType,
      },
      trainings: {
        type: new GraphQLList(TrainingType),
        resolve: (source) => [],
      },
    });
  },
});
