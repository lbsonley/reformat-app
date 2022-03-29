import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteLifeJourneyArgs } from "./args/DeleteLifeJourneyArgs";
import { LifeJourney } from "../../../models/LifeJourney";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LifeJourney)
export class DeleteLifeJourneyResolver {
  @TypeGraphQL.Mutation(_returns => LifeJourney, {
    nullable: true
  })
  async deleteLifeJourney(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteLifeJourneyArgs): Promise<LifeJourney | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).lifeJourney.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
