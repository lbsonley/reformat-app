import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByTalentEnergyArgs } from "./args/GroupByTalentEnergyArgs";
import { TalentEnergy } from "../../../models/TalentEnergy";
import { TalentEnergyGroupBy } from "../../outputs/TalentEnergyGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TalentEnergy)
export class GroupByTalentEnergyResolver {
  @TypeGraphQL.Query(_returns => [TalentEnergyGroupBy], {
    nullable: false
  })
  async groupByTalentEnergy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTalentEnergyArgs): Promise<TalentEnergyGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).talentEnergy.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
