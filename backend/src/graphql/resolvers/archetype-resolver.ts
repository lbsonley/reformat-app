import { Ctx, Query, Resolver } from 'type-graphql';
import Archetype from '../models/archetype';
import { Context } from '../../../prisma/context';

@Resolver()
class ArchetypeResolver {
  @Query(() => [Archetype])
  allArchetypes(@Ctx() context: Context) {
    return context.prisma.archetype.findMany();
  }
}

export default ArchetypeResolver;
