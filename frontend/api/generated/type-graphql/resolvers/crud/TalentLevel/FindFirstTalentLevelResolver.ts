import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstTalentLevelArgs } from "./args/FindFirstTalentLevelArgs";
import { TalentLevel } from "../../../models/TalentLevel";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TalentLevel)
export class FindFirstTalentLevelResolver {
  @TypeGraphQL.Query(_returns => TalentLevel, {
    nullable: true
  })
  async findFirstTalentLevel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTalentLevelArgs): Promise<TalentLevel | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).talentLevel.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
