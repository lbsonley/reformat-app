import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstLifeJourneyArgs } from "./args/FindFirstLifeJourneyArgs";
import { LifeJourney } from "../../../models/LifeJourney";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LifeJourney)
export class FindFirstLifeJourneyResolver {
  @TypeGraphQL.Query(_returns => LifeJourney, {
    nullable: true
  })
  async findFirstLifeJourney(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLifeJourneyArgs): Promise<LifeJourney | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).lifeJourney.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
