import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateArchetypeArgs } from "./args/AggregateArchetypeArgs";
import { Archetype } from "../../../models/Archetype";
import { AggregateArchetype } from "../../outputs/AggregateArchetype";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Archetype)
export class AggregateArchetypeResolver {
  @TypeGraphQL.Query(_returns => AggregateArchetype, {
    nullable: false
  })
  async aggregateArchetype(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateArchetypeArgs): Promise<AggregateArchetype> {
    return getPrismaFromContext(ctx).archetype.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
