import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyTalentEnergyArgs } from "./args/FindManyTalentEnergyArgs";
import { TalentEnergy } from "../../../models/TalentEnergy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TalentEnergy)
export class FindManyTalentEnergyResolver {
  @TypeGraphQL.Query(_returns => [TalentEnergy], {
    nullable: false
  })
  async talentEnergies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyTalentEnergyArgs): Promise<TalentEnergy[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).talentEnergy.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
