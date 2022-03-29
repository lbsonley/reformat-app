import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertTalentLevelArgs } from "./args/UpsertTalentLevelArgs";
import { TalentLevel } from "../../../models/TalentLevel";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TalentLevel)
export class UpsertTalentLevelResolver {
  @TypeGraphQL.Mutation(_returns => TalentLevel, {
    nullable: false
  })
  async upsertTalentLevel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertTalentLevelArgs): Promise<TalentLevel> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).talentLevel.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
