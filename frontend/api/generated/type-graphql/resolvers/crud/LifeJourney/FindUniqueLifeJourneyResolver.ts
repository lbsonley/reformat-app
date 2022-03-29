import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueLifeJourneyArgs } from "./args/FindUniqueLifeJourneyArgs";
import { LifeJourney } from "../../../models/LifeJourney";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LifeJourney)
export class FindUniqueLifeJourneyResolver {
  @TypeGraphQL.Query(_returns => LifeJourney, {
    nullable: true
  })
  async lifeJourney(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLifeJourneyArgs): Promise<LifeJourney | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).lifeJourney.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
