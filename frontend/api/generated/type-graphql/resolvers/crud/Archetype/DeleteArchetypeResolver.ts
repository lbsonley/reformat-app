import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteArchetypeArgs } from "./args/DeleteArchetypeArgs";
import { Archetype } from "../../../models/Archetype";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Archetype)
export class DeleteArchetypeResolver {
  @TypeGraphQL.Mutation(_returns => Archetype, {
    nullable: true
  })
  async deleteArchetype(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteArchetypeArgs): Promise<Archetype | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).archetype.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
