import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByTalentLevelArgs } from "./args/GroupByTalentLevelArgs";
import { TalentLevel } from "../../../models/TalentLevel";
import { TalentLevelGroupBy } from "../../outputs/TalentLevelGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TalentLevel)
export class GroupByTalentLevelResolver {
  @TypeGraphQL.Query(_returns => [TalentLevelGroupBy], {
    nullable: false
  })
  async groupByTalentLevel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTalentLevelArgs): Promise<TalentLevelGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).talentLevel.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
