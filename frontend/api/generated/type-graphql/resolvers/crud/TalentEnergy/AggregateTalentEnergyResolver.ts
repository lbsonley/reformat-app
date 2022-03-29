import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTalentEnergyArgs } from "./args/AggregateTalentEnergyArgs";
import { TalentEnergy } from "../../../models/TalentEnergy";
import { AggregateTalentEnergy } from "../../outputs/AggregateTalentEnergy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TalentEnergy)
export class AggregateTalentEnergyResolver {
  @TypeGraphQL.Query(_returns => AggregateTalentEnergy, {
    nullable: false
  })
  async aggregateTalentEnergy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTalentEnergyArgs): Promise<AggregateTalentEnergy> {
    return getPrismaFromContext(ctx).talentEnergy.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
