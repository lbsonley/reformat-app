import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateLifeJourneyArgs } from "./args/CreateLifeJourneyArgs";
import { LifeJourney } from "../../../models/LifeJourney";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LifeJourney)
export class CreateLifeJourneyResolver {
  @TypeGraphQL.Mutation(_returns => LifeJourney, {
    nullable: false
  })
  async createLifeJourney(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateLifeJourneyArgs): Promise<LifeJourney> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).lifeJourney.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
