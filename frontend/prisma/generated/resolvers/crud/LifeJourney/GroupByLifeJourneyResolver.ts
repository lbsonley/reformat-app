import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByLifeJourneyArgs } from "./args/GroupByLifeJourneyArgs";
import { LifeJourney } from "../../../models/LifeJourney";
import { LifeJourneyGroupBy } from "../../outputs/LifeJourneyGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LifeJourney)
export class GroupByLifeJourneyResolver {
  @TypeGraphQL.Query(_returns => [LifeJourneyGroupBy], {
    nullable: false
  })
  async groupByLifeJourney(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByLifeJourneyArgs): Promise<LifeJourneyGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).lifeJourney.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
