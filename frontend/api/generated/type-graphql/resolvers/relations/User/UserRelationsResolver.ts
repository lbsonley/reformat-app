import * as TypeGraphQL from "type-graphql";
import { Archetype } from "../../../models/Archetype";
import { LifeJourney } from "../../../models/LifeJourney";
import { TalentEnergy } from "../../../models/TalentEnergy";
import { TalentLevel } from "../../../models/TalentLevel";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Archetype, {
    nullable: true
  })
  async archetype(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<Archetype | null> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).archetype({});
  }

  @TypeGraphQL.FieldResolver(_type => LifeJourney, {
    nullable: true
  })
  async lifeJourney(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<LifeJourney | null> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).lifeJourney({});
  }

  @TypeGraphQL.FieldResolver(_type => TalentLevel, {
    nullable: true
  })
  async talentLevel(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<TalentLevel | null> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).talentLevel({});
  }

  @TypeGraphQL.FieldResolver(_type => TalentEnergy, {
    nullable: true
  })
  async talentEnergy(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<TalentEnergy | null> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).talentEnergy({});
  }
}
