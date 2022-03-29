import * as TypeGraphQL from "type-graphql";
import { TalentEnergy } from "../../../models/TalentEnergy";
import { User } from "../../../models/User";
import { TalentEnergyUsersArgs } from "./args/TalentEnergyUsersArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TalentEnergy)
export class TalentEnergyRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async users(@TypeGraphQL.Root() talentEnergy: TalentEnergy, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TalentEnergyUsersArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).talentEnergy.findUnique({
      where: {
        id: talentEnergy.id,
      },
    }).users(args);
  }
}
