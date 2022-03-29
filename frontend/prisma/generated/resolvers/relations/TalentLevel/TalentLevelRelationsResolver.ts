import * as TypeGraphQL from "type-graphql";
import { TalentLevel } from "../../../models/TalentLevel";
import { User } from "../../../models/User";
import { TalentLevelUsersArgs } from "./args/TalentLevelUsersArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TalentLevel)
export class TalentLevelRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async users(@TypeGraphQL.Root() talentLevel: TalentLevel, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TalentLevelUsersArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).talentLevel.findUnique({
      where: {
        id: talentLevel.id,
      },
    }).users(args);
  }
}
