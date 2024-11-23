const { Matchup, Technology } = require('../models'); // Assuming you have Mongoose models

const resolvers = {
  Query: {
    matchups: async () => await Matchup.find().populate('tech1 tech2'),
    matchup: async (_: any, { id }: { id: string }) => await Matchup.findById(id).populate('tech1 tech2'),
    technologies: async () => await Technology.find(),
  },
  Mutation: {
    createMatchup: async (_: any, { tech1, tech2 }: { tech1: string; tech2: string }) => {
      const newMatchup = await Matchup.create({
        tech1,
        tech2,
        votes1: 0,
        votes2: 0,
      });
      return newMatchup.populate('tech1 tech2');
    },
    vote: async (_: any, { matchupId, tech }: { matchupId: string; tech: string }) => {
      const matchup = await Matchup.findById(matchupId);
      if (!matchup) throw new Error('Matchup not found');

      if (matchup.tech1.toString() === tech) {
        matchup.votes1 += 1;
      } else if (matchup.tech2.toString() === tech) {
        matchup.votes2 += 1;
      } else {
        throw new Error('Invalid technology ID');
      }

      await matchup.save();
      return matchup.populate('tech1 tech2');
    },
  },
};

export default resolvers;