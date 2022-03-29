import * as TypeGraphQL from "type-graphql";
import { LifeJourney } from "../../../models/LifeJourney";
import { User } from "../../../models/User";
import { LifeJourneyUsersArgs } from "./args/LifeJourneyUsersArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LifeJourney)
export class LifeJourneyRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async users(@TypeGraphQL.Root() lifeJourney: LifeJourney, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: LifeJourneyUsersArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).lifeJourney.findUnique({
      where: {
        id: lifeJourney.id,
      },
    }).users(args);
  }
}
