import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteTalentLevelArgs } from "./args/DeleteTalentLevelArgs";
import { TalentLevel } from "../../../models/TalentLevel";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TalentLevel)
export class DeleteTalentLevelResolver {
  @TypeGraphQL.Mutation(_returns => TalentLevel, {
    nullable: true
  })
  async deleteTalentLevel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteTalentLevelArgs): Promise<TalentLevel | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).talentLevel.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
