import { buildSchema } from 'type-graphql';
import UserResolver from './resolvers/user-resolver';
import ArchetypeResolver from './resolvers/archetype-resolver';
import LifeJourneyResolver from './resolvers/life-journey-resolver';
import TalentEnergyResolver from './resolvers/talent-energy-resolver';
import TalentLevelResolver from './resolvers/talent-level-resolver';

const createSchema = async () =>
  buildSchema({
    resolvers: [
      UserResolver,
      ArchetypeResolver,
      LifeJourneyResolver,
      TalentEnergyResolver,
      TalentLevelResolver,
    ],
  });

export default createSchema;
