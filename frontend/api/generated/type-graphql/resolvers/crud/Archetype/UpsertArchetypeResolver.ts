import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertArchetypeArgs } from "./args/UpsertArchetypeArgs";
import { Archetype } from "../../../models/Archetype";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Archetype)
export class UpsertArchetypeResolver {
  @TypeGraphQL.Mutation(_returns => Archetype, {
    nullable: false
  })
  async upsertArchetype(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertArchetypeArgs): Promise<Archetype> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).archetype.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
