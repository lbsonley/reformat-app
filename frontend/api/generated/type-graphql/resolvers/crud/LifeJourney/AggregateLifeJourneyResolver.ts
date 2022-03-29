import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateLifeJourneyArgs } from "./args/AggregateLifeJourneyArgs";
import { LifeJourney } from "../../../models/LifeJourney";
import { AggregateLifeJourney } from "../../outputs/AggregateLifeJourney";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LifeJourney)
export class AggregateLifeJourneyResolver {
  @TypeGraphQL.Query(_returns => AggregateLifeJourney, {
    nullable: false
  })
  async aggregateLifeJourney(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLifeJourneyArgs): Promise<AggregateLifeJourney> {
    return getPrismaFromContext(ctx).lifeJourney.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
